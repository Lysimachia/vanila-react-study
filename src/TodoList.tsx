import React from 'react'

interface Todo {
  id: number | null;
  text: string;
  status: 'yet' | 'edit' | 'process' | 'completed' | null;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: any;
  setEditMode: any;
}

interface TodoListProps {
  todos: Todo[];
  onDelete: any;
  setEditMode: any;
}

function TodoItem ({todo, onDelete, setEditMode}:TodoItemProps) {
  return (
    <li>
      <input type="checkbox" name="text" />
      <label htmlFor="text" onDoubleClick={() => setEditMode(todo)}>{todo.text}</label>
      <input 
        type="text" 
        value={todo.text}  
        style={{display: todo.status === 'edit' ? 'inline' : 'none'}}/>
      <span>
        <button onClick={() => onDelete(todo.id)}>x</button>
      </span>
    </li>
  )
}

function TodoList({ todos, onDelete, setEditMode }: TodoListProps) {
  return (
    <ul>
      {
        todos.map((todo) => (
          <TodoItem 
            todo={todo} 
            key={todo.id} 
            onDelete={onDelete} 
            setEditMode={setEditMode}
          />
        ))
      }
    </ul>
  )
}

export default TodoList
