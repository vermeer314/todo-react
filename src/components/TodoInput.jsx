import { useState } from 'react';

function TodoInput({ onAdd }) {
  const [value, setValue] = useState('');

  function onSubmitHandler(e) {
    e.preventDefault();
    onAdd(value);
    setValue('');
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="todoInput"
        className="todo-add-input"
        value={value}
        placeholder="해야할 일을 입력해주세요"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button className="todo-add-button" type="submit">
        +
      </button>
    </form>
  );
}

export default TodoInput;
