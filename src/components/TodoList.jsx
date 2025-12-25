import TodoItem from './TodoItem';

function TodoList({ todos, toggleCompleted, confirmDelete, deleteTodoItem }) {
  return (
    <ul className="todo-wrap">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          confirmDelete={confirmDelete}
          deleteTodoItem={deleteTodoItem}
        />
      ))}
    </ul>
  );
}

export default TodoList;
