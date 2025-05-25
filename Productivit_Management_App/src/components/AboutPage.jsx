import React from 'react';

const AboutPage = () => {
  return (
    <div className="container">
      <section className="about-section">
        <h1>About TaskMaster</h1>
        <div className="about-content">
          <div className="about-image">
          <img src="/images/productivity.png" alt="productivity" className="productivity-img" />
          </div>

          <div className="abouttext">
            <h2>Your Personal Productivity Assistant</h2>
            <p>TaskMaster is a comprehensive productivity web application designed to help you organize your tasks, manage your time effectively, and boost your productivity.</p>
            
            <p>In today's fast-paced world, staying organized and focused is more important than ever. TaskMaster was created with one goal in mind: to simplify your daily productivity workflow and help you achieve more in less time.</p>
            
            <h3>Our Mission</h3>
            <p>To provide users with a simple yet powerful tool that makes task management and time tracking seamless, helping everyone achieve their goals and improve productivity.</p>
          </div>
        </div>

        <div className="features-overview">
          <h2>Features Overview</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Task Management</h3>
              <p>Create, organize, prioritize, and track your tasks with ease. Set due dates and mark tasks as complete when finished.</p>
            </div>
            <div className="feature-item">
              <h3>Time Tracking</h3>
              <p>Use the built-in Pomodoro timer to work in focused intervals and take scheduled breaks to maximize productivity.</p>
            </div>
            <div className="feature-item">
              <h3>Reminders</h3>
              <p>Never miss an important deadline with customizable reminders that notify you when tasks are due.</p>
            </div>
            <div className="feature-item">
              <h3>Analytics</h3>
              <p>Track your productivity with visual statistics that show your task completion rates and progress over time.</p>
            </div>
          </div>
        </div>

        <div className="my-information ">
          <h2>About the Developer</h2>
          <div className="my-content">
            <div className="about-image">
              <img src="./images/rachit_linckdinphoto.jpg" alt="my images ;)" />
            </div>
            <div className="my-bio">
              <h3>Rachit Singh</h3>
              <p>Web Application Programming student at Newton School of Technology. Passionate about creating tools that help people improve their daily lives. TaskMaster is my capstone project, combining my interests in productivity systems and web development.</p>
              <p>My goal with TaskMaster is to create a simple yet powerful application that anyone can use to get the best out of their time, regardless of their technical background.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;