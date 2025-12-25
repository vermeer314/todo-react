import TodoDeleteButton from './TodoDeleteButton';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onClick={() => onToggle(todo.id)}
    >
      <span className="todo-text">{todo.text}</span>

      <TodoDeleteButton onDelete={() => onDelete(todo.id)} />
    </li>
  );
}

export default TodoItem;
