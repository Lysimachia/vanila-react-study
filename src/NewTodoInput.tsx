import React from 'react'

interface NewTodoInputProps {
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
}

function NewTodoInput({onKeyDown}: NewTodoInputProps) {
  return (
    <div>
      <input placeholder="todos" onKeyDown={onKeyDown} />     
    </div>
  )
}

export default NewTodoInput
