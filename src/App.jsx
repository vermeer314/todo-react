import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    //todos의 초기 값으로 localStorage에 있는 밸류 할당
    //try catch로 localStorage 값이 깨지는 경우 방지
    try {
      const saved = localStorage.getItem('localTodos');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    //todos가 바뀔 때 마다 실행될 코드
    localStorage.setItem('localTodos', JSON.stringify(todos));
  }, [todos]);

  function addTodoItem() {
    const res = prompt('해야 할 일을 입력해주세요');
    if (!res) return;
    const text = res.trim();
    if (!text) return;

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

  function confirmDelete() {
    return confirm('삭제하시겠습니까?');
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
                if (!confirmDelete()) return;
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
