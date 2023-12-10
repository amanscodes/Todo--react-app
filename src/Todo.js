// Todo.js
import React, { useState } from 'react';
import './styles/app.css';
const Todo = ({ todo, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleUpdate = () => {
    onUpdate({ ...todo, task: editedTask, description: editedDescription });
    setEditing(false);
  };

  return (
    <div className="todo-card">
      <h3>{todo.task}</h3>
      <p>{todo.description}</p>
      {editing ? (
        <div>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <p>Status: {todo.status}</p>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Todo;
