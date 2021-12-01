import ReactDOM from "react-dom";
import React, { useState } from "react";
import NewTodoInput from './NewTodoInput.tsx';
import TodoList from './TodoList.tsx';
import Filter from './Filter.tsx';

type Todos = { 
  text: string;
  status: 'yet' | 'complete' | 'prosess';
};

function App() {
  const [todos, setTodos] = useState<Todos>([{id: null ,text: '', status: ''}]);

  const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    const { code } = e;
    const { value } = e.target;
    if(code === 'Enter') {
      setTodos([...todos, {id:todos.length+1, text: value, status: 'yet'}]);
      e.target.value = '';
    }
  }

  const onDelete = (id) => {
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
