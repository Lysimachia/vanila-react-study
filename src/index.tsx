import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import NewTodoInput from './NewTodoInput';
import TodoList from './TodoList';
import Filter from './Filter';
import { Todo, FilterType } from './global'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './style.css'

function App() {
  const initValue: Array<Todo> = [{id: Date.now(), text: 'test', active: false, completed: false}];
  const [ todos, setTodos ] = useState<Array<Todo>>(initValue);
  const [ filter, setFilter ] = useState('all');
  
  useEffect(() => {
    const saved = localStorage.getItem('TODO-LIST');
    if(saved) {
      setTodos(JSON.parse(saved));
    };
  }, [])

  useEffect(() => {
    localStorage.setItem('TODO-LIST', JSON.stringify(todos))
  }, [todos])


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

  const changeFilter = (filter: FilterType) => {
    setFilter(filter);
  }

  const getFilterdList = (filter: FilterType) => {
    if(filter === 'active'){
      return todos.filter(old => old.active);
    }
    if(filter === 'completed'){
      return todos.filter(old => old.completed);
    }
    else {
      return todos;
    }
  }
  const filteredList = getFilterdList(filter as FilterType);

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", p: 0}}>
      <Typography variant="h1" component="div">Todos</Typography>
      <NewTodoInput addTodo={addTodo} />
      <TodoList 
        todos={filteredList} 
        deleteTodo={deleteTodo} 
        completeTodo={completeTodo}
        activeTodo={activeTodo}
        editTodo={editTodo}
        filter={filter}
      />
      <Filter 
        todos={filteredList} 
        deleteAllTodos={deleteAllTodos}
        changeFilter={changeFilter}
        />
    </Container>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
