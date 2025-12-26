import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete, onEdit }) {
  return (
    <ul className="todo-wrap">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;
