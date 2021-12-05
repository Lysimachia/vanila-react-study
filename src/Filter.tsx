import React, { useState } from 'react'
import { Todo } from './global'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
interface FilterProps {
  todos: Todo[];
  deleteAllTodos: () => void;
}

function Filter({todos, deleteAllTodos}: FilterProps) {
  const [ filter, setFilter ] = useState('all')
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
    <section className="filter">
        <Box 
          sx={{  
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span>{message}</span>
           <ToggleButtonGroup value={filter}>
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="active" >Active</ToggleButton>
            <ToggleButton value="completed">Completed</ToggleButton> 
          </ToggleButtonGroup>
          <span>
          <Button onClick={() => deleteAllTodos()} sx={{ color: 'text.primary' }}>Complate All</Button>
        </span>
        </Box>
    </section>
  )
}

export default Filter
