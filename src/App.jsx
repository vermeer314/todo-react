import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const STORAGE_KEY = 'localTodos';

function App() {
  const [todos, setTodos] = useState(() => {
    //todos의 초기 값으로 localStorage에 있는 밸류 할당
    //try catch로 localStorage 값이 깨지는 경우 방지
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    //todos가 바뀔 때 마다 실행될 코드
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodoItem(value) {
    if (!isValid(value)) return;

    const todoItem = {
      id: crypto.randomUUID(),
      text: value.trim(),
      completed: false,
    };

    setTodos((prev) => [...prev, todoItem]);
  }

  function isValid(text) {
    if (text === null) return false;
    if (!text.trim()) return false;

    return true;
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
      <TodoInput onAdd={addTodoItem} />

      <TodoList
        todos={todos}
        onToggle={toggleCompleted}
        onDelete={deleteTodoItem}
      />
    </>
  );
}

export default App;
