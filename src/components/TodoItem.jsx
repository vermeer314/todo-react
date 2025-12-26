import { useEffect, useRef, useState } from 'react';
import TodoDeleteButton from './TodoDeleteButton';

//onEdit누르면
//text부분이 Input으로 바뀌고 수정가능
//현재 value는 가지고 있는 상태로 시작
//엔터를 누르면 수정이되고 상위에서 setState

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);
  const originalText = todo.text;
  const inputRef = useRef(null);

  useEffect(() => {
    //수정 중일 경우 input 창에 자동으로 포커스가 가도록
    if (isEditing) inputRef.current?.focus();
  }, [isEditing]);

  function cancelEdit(e) {
    e.preventDefault();
    e.stopPropagation();
    setDraft(originalText);
    setIsEditing(false);
  }

  return (
    <li
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onClick={() => {
        if (isEditing) return;
        onToggle(todo.id);
      }}
    >
      {!isEditing ? (
        <>
          <span className="todo-text">{todo.text}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setDraft(todo.text);
              setIsEditing(true);
            }}
          >
            edit
          </button>
          <TodoDeleteButton onDelete={() => onDelete(todo.id)} />
        </>
      ) : (
        //수정 중인 경우
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!draft.trim()) return;
            onEdit(todo.id, draft.trim());
            setIsEditing(false);
          }}
        >
          <input
            ref={inputRef}
            type="text"
            name="todoEditing"
            className="todo-edit-input"
            value={draft}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              setDraft(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                cancelEdit(e);
              }
            }}
          ></input>
          <button type="submit" className="todo-edit-confirm-button">
            confirm
          </button>
          <button
            type="button"
            className="todo-edit-cancel-button"
            onClick={cancelEdit}
          >
            cancel
          </button>
        </form>
      )}
    </li>
  );
}

export default TodoItem;
