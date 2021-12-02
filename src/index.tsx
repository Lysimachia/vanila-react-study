import ReactDOM from "react-dom";
import React, { useState } from "react";
import NewTodoInput from './NewTodoInput';
import TodoList from './TodoList';
import Filter from './Filter';

interface Todos {
  id: number | null;
  text: string;
  status: 'yet' | 'process' | 'completed' | null;
}

function App() {
  const [todos, setTodos] = useState([{id: null ,text: '', status: null}]);
  
  const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { code } = e;
    const { value } = target;
    if(code === 'Enter') {
      setTodos([...todos, {id:todos.length, text: value, status: ''}]);
      target.value = '';
    }
  }

  const onDelete = (id: Pick<Todos, 'id'>) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <NewTodoInput onKeyDown={onKeyDown} />
      <TodoList 
        todos={todos.filter(todo => todo.id != null)} 
        onDelete={onDelete} 
      />
      <Filter todos={todos.filter(todo => todo.id != null)} />
    </>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
