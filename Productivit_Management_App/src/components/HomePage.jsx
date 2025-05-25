import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [quote, setQuote] = useState('');

  // Fetch quote from ZenQuotes API
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
      // Use fallback quotes
      const fallbackQuotes = [
        "The key to productivity is not working harder, but working smarter.",
        "Don't count the days, make the days count.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "The way to get started is to quit talking and begin doing.",
        "Your time is limited, don't waste it living someone else's life.",
        "The only way to do great work is to love what you do.",
        "Productivity is never an accident. It is always the result of a commitment to excellence."
      ];
      const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
      setQuote(fallbackQuotes[randomIndex]);
    }
  };

  // Load the quote on mount
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
    <div className="container-box">
      <header className="home-header">
        <h1>Welcome to TaskMaster</h1>
        <p>Your all-in-one productivity solution for managing tasks, tracking time, and achieving your goals.</p>
        <div className="motivation-box">
          <h3>Motivation Hub</h3>
          <p>{quote}</p>
        </div>
      </header>
    </div>
  );
};

export default HomePage;

