import React, { useState, useEffect } from 'react';

const ReminderStuff = () => {
  const [reminderList, setReminderList] = useState(() => {
    const saved = localStorage.getItem('reminderList');
    return saved ? JSON.parse(saved) : [];
  });

  const [reminderText, setReminderText] = useState('');
  const [reminderDateTime, setReminderDateTime] = useState('');

  useEffect(() => {
    localStorage.setItem('reminderList', JSON.stringify(reminderList));
  }, [reminderList]);

  useEffect(() => {
    const intervalCheck = setInterval(() => {
      const now = new Date();

      reminderList.forEach(item => {
        const itemTime = new Date(item.time);

        if (!item.triggered &&
            itemTime <= now &&
            itemTime >= new Date(now - 60000)) {

          if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Reminder', {
              body: item.description,
              icon: '/favicon.ico'
            });
          }

          setReminderList(prev =>
            prev.map(one =>
              one.id === item.id ? { ...one, triggered: true } : one
            )
          );
        }
      });
    }, 30000);

    return () => clearInterval(intervalCheck);
  }, [reminderList]);

  // add one
  const addOneReminder = (e) => {
    e.preventDefault();

    if (reminderText.trim() === '' || !reminderDateTime) {
      alert('Please fill in all fields');
      return;
    }

    const newOne = {
      id: Date.now(),
      description: reminderText,
      time: reminderDateTime,
      triggered: false
    };

    setReminderList([...reminderList, newOne]);
    setReminderText('');
    setReminderDateTime('');
  };

  // delete one
  const removeReminder = (id) => {
    setReminderList(reminderList.filter(one => one.id !== id));
  };

  // time formatter
  const niceTime = (timeStr) => {
    const d = new Date(timeStr);
    return d.toLocaleString();
  };

  return (
    <section className="reminders-section">
      <h2>Reminders</h2>
      <form className="reminder-form" onSubmit={addOneReminder}>
        <input 
          type="text" 
          className="reminder-input" 
          placeholder="Reminder description" 
          value={reminderText}
          onChange={(e) => setReminderText(e.target.value)}
          required
        />
        <input 
          type="datetime-local" 
          className="time-input" 
          value={reminderDateTime}
          onChange={(e) => setReminderDateTime(e.target.value)}
          required
        />
        <button type="submit" className="add-reminder-btn">Set Reminder</button>
      </form>

      <div className="reminders-list">
        {reminderList.length === 0 ? (
          <p className="no-reminders">No reminders set.</p>
        ) : (
          reminderList.map(one => (
            <div key={one.id} className="reminder-item">
              <div className="reminder-content">
                <span className="reminder-text">{one.description}</span>
                <span className="reminder-datetime">{niceTime(one.time)}</span>
                {one.triggered && <span className="reminder-triggered">(Triggered)</span>}
              </div>
              <button 
                className="btn btn-delete"
                onClick={() => removeReminder(one.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ReminderStuff;
