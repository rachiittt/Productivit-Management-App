import React from 'react'
import Navigation from './Navigation'
const BlogPage = () => {
  return (
    <div>
      <Navigation/>
    <div className="container">
      <section className="blog-section">
        <h1>Productivity Blog</h1>
        <p className="heading">Tips, tricks, and insights to help you maximize your productivity and achieve your goals.</p>

        <div className="blog-posts">
          <article className="blog-post">
            <div className="post-image">
              <img src="/images/timer.webp" alt="timer" className='productivity-img' />
            </div>
            <div className="post">
              <h2>The Power of the Pomodoro Technique</h2>
              <div className="post-content">Posted on April 10, 2025</div>
              <p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks.</p>
              <p>This technique is based on the idea that frequent breaks can improve mental agility. By working in focused bursts, you can maintain high concentration and avoid burnout.</p>
              <p>Here's how to implement the Pomodoro Technique in your daily routine:</p>
              <ol>
                <li>Choose a task you want to accomplish</li>
                <li>Set the timer for 25 minutes</li>
                <li>Work on the task until the timer rings</li>
                <li>Take a short 5-minute break</li>
                <li>After four pomodoros, take a longer break (15-30 minutes)</li>
              </ol>
              <p>Try using our built-in Pomodoro timer on the home page to boost your productivity today!</p>
            </div>
          </article>

          <article className="blog-post">
            <div className="post-image">
            <img src="/images/productivity-img.png" alt="timer" className='productivity-img' />
            </div>
            
            <div className="post">
              <h2>The Art of Task Prioritization</h2>
              <div className="post-content">Posted on April 5, 2025</div>
              <p>With so many tasks competing for our attention, how do we decide what to focus on first? Effective prioritization is key to maximizing productivity and reducing stress.</p>
              <p>One popular method is the Eisenhower Matrix, which categorizes tasks based on their urgency and importance:</p>
              <ul>
                <li><strong>Important and Urgent</strong>: Do these tasks immediately</li>
                <li><strong>Important but Not Urgent</strong>: Schedule time for these tasks</li>
                <li><strong>Not Important but Urgent</strong>: Delegate these tasks if possible</li>
                <li><strong>Not Important and Not Urgent</strong>: Eliminate these tasks</li>
              </ul>
              <p>In TaskMaster, you can use the priority levels (Low, Medium, High) to implement a simplified version of this system. Focus on your high-priority tasks first, then move on to medium and low priority tasks.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
    </div>
  )
}

export default BlogPage