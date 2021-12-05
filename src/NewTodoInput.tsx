import React, { useState } from 'react'
import { Todo } from './global'

interface NewTodoInputProps {
  addTodo: (text: string) => void;
}

function NewTodoInput({ addTodo }: NewTodoInputProps) {
  const [newTodo, setNewTodo] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>){
    if(e.code === 'Enter' && !e.nativeEvent.isComposing) {
      addTodo(newTodo);
      setNewTodo('');
    }
  }

  return (
    <div>
      <input placeholder="todos" value={newTodo} onChange={handleChange} onKeyDown={handleKeyDown} />
    </div>
  )
}

export default NewTodoInput
