import React,{useState} from "react";

const TaskForm=({onAddTask})=>{
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit=(event)=>{
    event.preventDefault()
    if(text.trim()===""){
      alert('Please enter a Task')
      return
    }

    onAddTask({text,dueDate,priority})

    setText('');
    setDueDate('');
    setPriority('medium');
  }

  return(
    <form className="task-form" onSubmit={handleSubmit}>
      <input type="text" className="task-input" placeholder="Enter your Task's" onChange={(event) => setText(event.target.value)} value={text} required/>
      <input type="date" className="date-input" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />
      <select className="priority-select" value={priority} onChange={(event) => setPriority(event.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="task-btn">Add Task</button>

    </form>
  )
}

export default TaskForm