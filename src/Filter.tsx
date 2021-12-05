import React from 'react'
import { Todo } from './global'
interface FilterProps {
  todos: Todo[];
  deleteAllTodos: () => void;
}

function Filter({todos, deleteAllTodos}: FilterProps) {
  let message = '';
  if(todos.length === 0) {
    message = 'There is no active Item left';
  }
  if(todos.length === 1) {
    message = '1 item left';
  }
  if(todos.length  > 1) {
    message = `${todos.length} items left`;
  }

  return (
    <>
      <div>
        <span>{message}</span>
        <div><button type="button">All</button></div>
        <div><button type="button">Prosess</button> </div>
        <div><button type="button">Complete</button> </div>
      </div>
      <div>
        <button onClick={() => deleteAllTodos()}>Complate All</button>
      </div>
    </>
  )
}

export default Filter
