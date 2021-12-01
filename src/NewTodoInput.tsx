import React from 'react'

function NewTodoInput({onKeyDown}) {
  return (
    <div>
      <input placeholder="todos" onKeyDown={onKeyDown} />     
    </div>
  )
}

export default NewTodoInput
