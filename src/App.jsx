import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import useTodos from './hooks/useTodos';

const STORAGE_KEY = 'localTodos';

function App() {
  const { todos, addTodoItem, deleteTodoItem, editTodoItem, toggleCompleted } =
    useTodos();

  return (
    <>
      <TodoInput onAdd={addTodoItem} />

      <TodoList
        todos={todos}
        onToggle={toggleCompleted}
        onDelete={deleteTodoItem}
        onEdit={editTodoItem}
      />
    </>
  );
}

export default App;
