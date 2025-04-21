import React from 'react';

const ServicesPage = () => {
  return (
    <div className="container">
      <section className="services-section">
        <h1>Our Services</h1>
        <p className="services-intro">TaskMaster offers a variety of features to help you stay organized, focused, and productive. Here's what we provide:</p>

        <div className="service-item">
          <div className="service-icon">📋</div>
          <div className="service-details">
            <h2>Task Management</h2>
            <p>Our comprehensive task management system lets you:</p>
            <ul>
              <li>Create and organize tasks with detailed descriptions</li>
              <li>Set priorities (Low, Medium, High) to focus on what matters most</li>
              <li>Assign due dates to meet deadlines</li>
              <li>Mark tasks as complete and track your progress</li>
              <li>Filter tasks by status (completed or pending)</li>
              <li>Clear completed tasks with a single click</li>
            </ul>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">⏲️</div>
          <div className="service-details">
            <h2>Time Management</h2>
            <p>Manage your time effectively with our Pomodoro timer:</p>
            <ul>
              <li>Work in focused 25-minute intervals (Pomodoro)</li>
              <li>Take short 5-minute breaks between sessions</li>
              <li>Enjoy longer 15-minute breaks after completing multiple Pomodoros</li>
              <li>Track time spent on tasks</li>
              <li>Boost productivity by following proven time management techniques</li>
            </ul>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">🔔</div>
          <div className="service-details">
            <h2>Reminders & Notifications</h2>
            <p>Stay on top of your tasks with our reminder system:</p>
            <ul>
              <li>Set custom reminders with specific dates and times</li>
              <li>Receive browser notifications when reminders are due</li>
              <li>Never miss an important deadline again</li>
              <li>Manage and delete reminders as needed</li>
            </ul>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">📊</div>
          <div className="service-details">
            <h2>Productivity Analytics</h2>
            <p>Track your productivity with visual statistics:</p>
            <ul>
              <li>View total tasks, completed tasks, and pending tasks</li>
              <li>Monitor your overall completion progress with a visual progress bar</li>
              <li>Track productivity trends over time (coming soon)</li>
              <li>Identify productivity patterns to optimize your workflow</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;