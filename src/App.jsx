import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodoItem() {
    const res = prompt('해야 할 일을 입력해주세요');
    if (!res) return;
    const text = res.trim();

    const todoItem = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
    };

    setTodos((prev) => [...prev, todoItem]);
  }

  function toggleCompleted(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodoItem(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <button className="todo-add-button" onClick={addTodoItem}>
        +
      </button>
      <ul className="todo-wrap">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
            onClick={() => toggleCompleted(todo.id)}
          >
            {todo.text}
            <button
              onClick={(e) => {
                e.stopPropagation(); //부모로 이벤트 전파 방지
                deleteTodoItem(todo.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
