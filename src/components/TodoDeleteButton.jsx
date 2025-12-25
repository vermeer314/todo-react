function TodoDeleteButton({ onDelete }) {
  return (
    <button
      type="button"
      className="todo-delete-button"
      onClick={(e) => {
        e.stopPropagation(); //부모로 이벤트 전파 방지
        if (!confirm('삭제하시겠습니까?')) return;
        onDelete();
      }}
    >
      X
    </button>
  );
}

export default TodoDeleteButton;
