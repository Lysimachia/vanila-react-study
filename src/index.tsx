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
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([{id: null ,text: '', status: null}]);
  
  const onChange = (e: any) => {
    setNewTodo(e.target.value);
  }

  const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { code } = e;
    const { isComposing } = e.nativeEvent;
    const { value } = target;
    if(code === 'Enter' && !isComposing) {
      setTodos([...todos, {id:Date.now(), text: value, status: ''}]);
      setNewTodo('');
    }
  }

  const onDelete = (id: Pick<Todos, 'id'>) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <NewTodoInput newTodo={newTodo} onKeyDown={onKeyDown} onChange={onChange}/>
      <TodoList 
        todos={todos.filter(todo => todo.id != null)} 
        onDelete={onDelete} 
      />
      <Filter todos={todos.filter(todo => todo.id != null)} />
    </>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
