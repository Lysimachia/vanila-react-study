import React from 'react'

function TodoItem ({todo, onDelete}) {
  return (
    <li>
      <input type="checkbox" name="text" />
      <label htmlFor="text">{todo.text}</label>
      <span>
        <button onClick={() => onDelete(todo.id)}>x</button>
      </span>
    </li>
  )
}

function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {
        todos.map((todo, index) => (
          <TodoItem todo={todo} key={todo.id} onDelete={onDelete} />
        ))
      }
    </ul>
  )
}

export default TodoList
