function TodoAddButton({ onAdd }) {
  return (
    <button className="todo-add-button" onClick={onAdd}>
      +
    </button>
  );
}

export default TodoAddButton;
