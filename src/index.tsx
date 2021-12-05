import ReactDOM from "react-dom";
import React, { useState } from "react";
import NewTodoInput from './NewTodoInput';
import TodoList from './TodoList';
import Filter from './Filter';
import { Todo } from './global'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './style.css'

function App() {
  const initValue: Array<Todo> = [];
  const [todos, setTodos] = useState<Array<Todo>>(initValue);
  
  const addTodo = (text: string) => {
    setTodos(old => [...old, { id: Date.now(), text, active: false, completed: false }]);
  }

  const deleteTodo = (id: number) => {
    setTodos(old => old.filter(todo => todo.id !== id));
  }

  const deleteAllTodos = () => {
    setTodos([]);
  }

  const activeTodo = (id:number) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, active: !todo.active} : todo));
  }

  const completeTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };

  const editTodo = (id: number, text: string) => {
  setTodos(todos.map(todo => todo.id === id ? {...todo, text: text} : todo));
  }


  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", p: 0}}>
      <Typography variant="h1" component="div">Todos</Typography>
      <NewTodoInput addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        deleteTodo={deleteTodo} 
        completeTodo={completeTodo}
        activeTodo={activeTodo}
        editTodo={editTodo}
      />
      <Filter 
        todos={todos} 
        deleteAllTodos={deleteAllTodos}
        />
    </Container>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
