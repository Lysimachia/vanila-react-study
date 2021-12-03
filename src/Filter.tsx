import React from 'react'

interface Todo {
  id: number | null;
  text: string;
  status: 'yet' | 'process' | 'completed' | null;
}
interface FilterProps {
  todos: Todo[];
  onDeleteAll: any;
}

function Filter({todos, onDeleteAll}: FilterProps) {
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
        <div><a href="">All</a></div>
        <div><a href="">Prosess</a> </div>
        <div><a href="">Complete</a> </div>
      </div>
      <div>
        <button onClick={()=>onDeleteAll()}>Complate All</button>
      </div>
    </>
  )
}

export default Filter
