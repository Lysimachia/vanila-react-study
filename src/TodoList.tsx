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
  onEdit: any;
}

interface TodoListProps {
  todos: Todo[];
  onDelete: any;
  setEditMode: any;
  onEdit: any;
}

function TodoItem ({todo, onDelete, setEditMode, onEdit}:TodoItemProps) {
  return (
    <li>
      <input type="checkbox" name="text" />
      <label htmlFor="text" onDoubleClick={() => setEditMode(todo)}>{todo.text}</label>
      <input 
        type="text" 
        value={todo.text}
        style={{display: todo.status === 'edit' ? 'inline' : 'none'}}
        onChange={() => onEdit(todo)}
        />
      <span>
        <button onClick={() => onDelete(todo.id)}>x</button>
      </span>
    </li>
  )
}

function TodoList({ todos, onDelete, setEditMode, onEdit }: TodoListProps) {
  return (
    <ul>
      {
        todos.map((todo) => (
          <TodoItem 
            todo={todo} 
            key={todo.id} 
            onDelete={onDelete} 
            setEditMode={setEditMode}
            onEdit={onEdit}
          />
        ))
      }
    </ul>
  )
}

export default TodoList
