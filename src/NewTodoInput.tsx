import React from 'react'

interface NewTodoInputProps {
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  newTodo: string;
  onChange: any;
}

function NewTodoInput({onKeyDown, newTodo, onChange}: NewTodoInputProps) {
  return (
    <div>
      <input placeholder="todos" value={newTodo} onChange={onChange} onKeyDown={onKeyDown} />     
    </div>
  )
}

export default NewTodoInput
