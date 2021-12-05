import React, { useState } from 'react';
import { Todo }from './global';
import './style.css';
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
    <li>
      <input 
        type="checkbox" 
        checked={completed ? true : false}
        onChange={() => completeTodo(id, status)}
      />
      {
        editMode ? 
        <input type="text" value={change} onChange={handleChange} onKeyDown={handleKeyDown}/>
        : <label className={active ? 'active' : null} onClick={() => activeTodo(id)}>{text}</label>
      }
      <span>
        <button onClick={() => setEditMode(!editMode)}>edit</button>
        <button onClick={() => deleteTodo(id)}>x</button>
      </span>
    </li>
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
    <ul>
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
    </ul>
  )
}

export default TodoList
