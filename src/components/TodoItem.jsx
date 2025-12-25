function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
      <button
        onClick={(e) => {
          e.stopPropagation(); //부모로 이벤트 전파 방지
          if (!confirm('삭제하시겠습니까?')) return;
          onDelete(todo.id);
        }}
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;
