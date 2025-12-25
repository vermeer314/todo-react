function TodoItem({ todo, toggleCompleted, confirmDelete, deleteTodoItem }) {
  return (
    <li
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
  );
}

export default TodoItem;
