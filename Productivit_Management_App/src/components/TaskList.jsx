import React from 'react';

const TaskList = ({ tasks, onComplete, onEditTask, onDeleteTask }) => {
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return dateString ? date.toLocaleDateString() : '';
  }
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <li className="no-tasks">No tasks to display.</li>
      ) : (
        tasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-content">
              <span className="task-title">{task.text}</span>
              {task.dueDate && (
                <span className="task-date">Due: {formatDate(task.dueDate)}</span>
              )}
              <span className={`task-priority priority-${task.priority}`}>
                {task.priority}
              </span>
            </div>
            <div className="task-actions">
              <button 
                className="btn btn-complete"
                onClick={() => onComplete(task.id)}
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button 
                className="btn btn-edit"
                onClick={() => {
                  // Simple prompt-based editing for now
                  const newText = prompt('Edit task:', task.text);
                  if (newText && newText.trim() !== '') {
                    onEditTask(task.id, { text: newText });
                  }
                }}
              >
                Edit
              </button>
              <button 
                className="btn btn-delete"
                onClick={() => onDeleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;