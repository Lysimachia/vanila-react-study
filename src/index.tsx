import ReactDOM from "react-dom";
import React, { useState } from "react";
import NewTodoInput from './NewTodoInput';
import TodoList from './TodoList';
import Filter from './Filter';
import { Todo } from './global'

function App() {
  const initValue: Array<Todo> = [{ id: Date.now(), text: 'test', active: false,completed: false}];
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
    <>
      <h1>Todos</h1>
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
    </>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
