import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const times = {
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60
  };

  const [mode, setMode] = useState('pomodoro');
  const [timeLeft, setTimeLeft] = useState(times.pomodoro);
  const [isRunning, setIsRunning] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  const timerRef = useRef(null);

  useEffect(() => {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        setHasPermission(true);
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          setHasPermission(permission === 'granted');
        });
      }
    }
  }, []);

  // Format time as mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Start timer
  const startTimer = () => {
    setIsRunning(true);
  };

  // Pause timer
  const pauseTimer = () => {
    setIsRunning(false);
  };

  // Reset timer
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(times[mode]);
  };

  // Switch timer mode
  const switchMode = (newMode) => {
    setIsRunning(false);
    setMode(newMode);
    setTimeLeft(times[newMode]);
  };

  // Show notification
  const showNotification = (title, body) => {
    if (hasPermission) {
      new Notification(title, {
        body: body,
        icon: '⏰'
      });
    }
  };

  // Play completion sound
  const playCompletionSound = () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
      console.log('Audio play failed:', e);
    }
  };

  // Timer effect
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);

            // Show notification
            showNotification('Timer Complete', `Your ${mode} session is complete!`);

            // Play sound
            playCompletionSound();

            // Switch modes automatically
            if (mode === 'pomodoro') {
              switchMode('shortBreak');
            } else {
              switchMode('pomodoro');
            }

            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, mode]);

  return (
    <section className="timer-section">
      <h2>Pomodoro Timer</h2>
      <div className="timer">
        <div className="timer-display">{formatTime(timeLeft)}</div>
        <div className="timer-controls">
          <button 
            className="btn btn-start" 
            onClick={startTimer} 
            disabled={isRunning}
          >
            Start
          </button>
          <button 
            className="btn btn-pause" 
            onClick={pauseTimer} 
            disabled={!isRunning}
          >
            Pause
          </button>
          <button 
            className="btn btn-reset" 
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
        <div className="timer-mode">
          <button 
            className={`btn btn-mode ${mode === 'pomodoro' ? 'active' : ''}`} 
            onClick={() => switchMode('pomodoro')}
          >
            Pomodoro
          </button>
          <button 
            className={`btn btn-mode ${mode === 'shortBreak' ? 'active' : ''}`} 
            onClick={() => switchMode('shortBreak')}
          >
            Short Break
          </button>
          <button 
            className={`btn btn-mode ${mode === 'longBreak' ? 'active' : ''}`} 
            onClick={() => switchMode('longBreak')}
          >
            Long Break
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timer;