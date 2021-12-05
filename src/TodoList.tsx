import React, { useState } from 'react';
import { Todo }from './global';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number, status: string) => void;
  activeTodo: (id: number) => void;
  editTodo: (id:number, text: string) => void; 
}

function TodoItem ({ todo, deleteTodo, completeTodo, activeTodo, editTodo }:TodoItemProps) {
  const { id, text, active, completed } = todo;
  const [ change, setChange ] = useState(text);
  const [ editMode, setEditMode ] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChange(e.target.value);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.code === 'Enter' && !e.nativeEvent.isComposing) {
      editTodo(id, change);
      setEditMode(!editMode)
    }
  }

  return (
    <ListItem 
      sx={{ width:'100%' }}
      className="todo-item"
    >
      <ListItemButton 
        onClick={() => completeTodo(id, status)} 
        sx={{ width:'80%' }}
      >
        <ListItemIcon >
          <Checkbox
            edge="start"
            checked={completed ? true : false}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        {
          editMode ? 
          <TextField 
            fullWidth
            value={change} 
            variant="standard" 
            onChange={handleChange} 
            onKeyDown={handleKeyDown}
            className="edit-input"
          />
          :<ListItemText 
            className={active ? 'active' : null}  
            primary={text} 
          />
        }
      </ListItemButton>
      
      <ListItemButton 
        aria-label="edit" 
        onClick={() => {
          setEditMode(!editMode); 
          editTodo(id, text);
          }} >
        {
          editMode 
          ? <SaveIcon />
          : <EditIcon />
        }
      </ListItemButton>

      <ListItemButton 
        aria-label="delete" 
        onClick={() => deleteTodo(id)}
      >
        <DeleteIcon />
      </ListItemButton>

    </ListItem>
  )
}

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
  activeTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void;
}

function TodoList({ todos, deleteTodo, completeTodo, activeTodo, editTodo }: TodoListProps) {
  return (
    <section className="todo-list">  
      <List sx={{ mb: 5 }}>
      {
        todos.map((todo) => (
          <TodoItem 
            todo={todo} 
            key={todo.id} 
            deleteTodo={deleteTodo} 
            completeTodo={completeTodo}
            activeTodo={activeTodo}
            editTodo={editTodo}
          />
        ))
      }
      </List>
    </section>
 
  )
}

export default TodoList
