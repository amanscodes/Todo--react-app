// TodoForm.js
import React, { useState } from 'react';
import './styles/app.css'
const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    const newTodo = {
      id: Date.now(),
      task,
      description,
      status: 'not completed',
    };
    onAdd(newTodo);
    setTask('');
    setDescription('');
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Task Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="add"onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
