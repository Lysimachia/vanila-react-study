import React from 'react'

interface Todo {
  id: number | null;
  text: string;
  status: 'yet' | 'process' | 'completed' | null;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: any;
}

interface TodoListProps {
  todos: Todo[];
  onDelete: any;
}

function TodoItem ({todo, onDelete}:TodoItemProps) {
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

function TodoList({ todos, onDelete }: TodoListProps) {
  return (
    <ul>
      {
        todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} onDelete={onDelete} />
        ))
      }
    </ul>
  )
}

export default TodoList
