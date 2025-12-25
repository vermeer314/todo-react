import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todo-wrap">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={onToggle}
          deleteTodoItem={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
