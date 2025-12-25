import { useState, useEffect } from 'react';
import './App.css';
import TodoAddButton from './components/TodoAddButton';
import TodoList from './components/TodoList';

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
    if (res === null) return;
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
      <TodoAddButton onAdd={addTodoItem} />

      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        confirmDelete={confirmDelete}
        deleteTodoItem={deleteTodoItem}
      />
    </>
  );
}

export default App;
