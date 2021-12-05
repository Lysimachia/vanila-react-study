import React, { useState } from 'react'
import { Todo } from './global'
import Input from '@mui/material/Input';

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
    <section className="new-todo">
      <Input  
        fullWidth
        autoFocus
        sx={{ mx: 'auto', my: 4, width: '90%' }}
        placeholder="write here"
        value={newTodo} 
        onChange={handleChange} 
        onKeyDown={handleKeyDown} 
      />
    </section>
  )
}

export default NewTodoInput
