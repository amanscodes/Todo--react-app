// TodoList.js
import React from 'react';
import Todo from './Todo';
import './styles/app.css'
const TodoList = ({ todos, onUpdate, onDelete }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
