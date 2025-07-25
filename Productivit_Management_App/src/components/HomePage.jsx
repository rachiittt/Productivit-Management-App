import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import Navigation from './Navigation';
import Footer from './Footer';
const HomePage = () => {
  const [tasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [quote, setQuote] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://zenquotes.io/api/today');
      const data = await response.json();
      if (Array.isArray(data) && data[0]?.q) {
        setQuote(data[0].q);
      } else {
        throw new Error("Invalid API response");
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      const fallbackQuotes = [
        "The key to productivity is not working harder, but working smarter.",
        "Don't count the days, make the days count.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "The way to get started is to quit talking and begin doing.",
        "Your time is limited, don't waste it living someone else's life.",
        "The only way to do great work is to love what you do.",
        "Productivity is never an accident. It is always the result of a commitment to excellence.",
        "The best way to predict your future is to create it."
      ];
      const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
      setQuote(fallbackQuotes[randomIndex]);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  // Request notification permission
  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  }, []);
  
  
  return (
    <div>
      <Navigation/>
    
    <div className="container">
      
      <header className="home-header">
        <h1>Welcome to TaskMaster</h1>
        <p>Your all-in-one productivity solution for managing tasks, tracking time, and achieving your goals.</p>
        <div className="motivation-box">
          <h3>Motivational Quotes</h3>
          <p>{quote}</p>
        </div>
      </header>
      
      <Dashboard tasks={tasks} />
    </div>
    <Footer/>
    </div>
  );
};

export default HomePage;
