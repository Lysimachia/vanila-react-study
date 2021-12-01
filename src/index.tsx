import ReactDOM from "react-dom";
import React, { useState } from "react";
import NewTodoInput from './NewTodoInput.tsx';
import TodoList from './TodoList.tsx';

type Todos = { 
  text: string;
  status: 'yet' | 'complete' | 'prosess';
};

function App() {
  const [todos, setTodos] = useState<Todos>([{text: '', status: ''}]);
  return (
    <>
      <NewTodoInput />
      <TodoList todos={todos} />
    </>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
