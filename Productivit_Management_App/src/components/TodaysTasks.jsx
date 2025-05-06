import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Timer from './Timer';
import Reminders from './Reminders';

const TodaysTasks = () => {
  // State for tasks
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // State for task filter
  const [filter, setFilter] = useState('all');

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  // Add new task
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };
  
  //  task completion
  const complete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  
  // Edit task
  const editTask = (taskId, updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, ...updatedTask } : task
    ));
  };
  
  // Delete task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
  // Clear completed tasks
  const clearCompletedTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  };
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  <TaskList 
  tasks={
    tasks.filter(task => {
      if (filter === 'all') return true;
      if (filter === 'completed') return task.completed;
      if (filter === 'pending') return !task.completed;
      return true;
    })
  }
/>

  
  return (
    <div className="container">
      <header className="page-header">
        <h1>Today's Tasks</h1>
        <p>Manage your tasks, track time, and set reminders all in one place.</p>
      </header>
      
      <section className="task-section">
        <h2>Task Management</h2>
        
        <TaskForm onAddTask={addTask} />
        
        <div className="task-controls">
          <select 
            className="filter-select" 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
          <button 
            className="btn btn-clear" 
            onClick={clearCompletedTasks}
          >
            Clear Completed
          </button>
        </div>
        
        <TaskList 
          tasks={filteredTasks} 
          onComplete={complete}
          onEditTask={editTask}
          onDeleteTask={deleteTask}
        />
      </section>
      
      <Timer />
      
      <Reminders />
    </div>
  );
};

export default TodaysTasks;