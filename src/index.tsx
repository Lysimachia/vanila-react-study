import ReactDOM from "react-dom";
import React, { useState } from "react";
import NewTodoInput from './NewTodoInput';
import TodoList from './TodoList';
import Filter from './Filter';

interface Todos {
  id: number | null;
  text: string;
  status: 'yet' | 'process' | 'completed' | 'eidt' | null;
}

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([{id: null, text: '', status: null}]);
  
  const onChange = (e: any) => {
    setNewTodo(e.target.value);
  }

  const onCreate = (e:React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { code } = e;
    const { isComposing } = e.nativeEvent;
    const { value } = target;
    if(code === 'Enter' && !isComposing) {
      setTodos([...todos, {id:Date.now(), text: value, status: ''}]);
      setNewTodo('');
    }
  }

  const onDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const onDeleteAll = () => {
    setTodos([{id: null, text: '', status: null}]);
  }

  const onEdit = (next: any) => {
    setTodos(todos.map(prev => prev.id === next.id 
      ? {...prev, text: next.text}
      : prev))
  }

  const setEditMode = (next: any) => {
    if(next.status !== 'edit'){
      setTodos(todos.map(prev => prev.id === next.id 
        ? { ...next, status: 'edit'}
        : prev
        ));
    } else {
      setTodos(todos.map(prev => prev.id === next.id 
        ? {...prev, status: ''}
        : prev
        ));
    }
  }

  return (
    <>
      <NewTodoInput newTodo={newTodo} onKeyDown={onCreate} onChange={onChange}/>
      <TodoList 
        todos={todos.filter(todo => todo.id != null)} 
        onDelete={onDelete} 
        setEditMode={setEditMode}
        onEdit={onEdit}
      />
      <Filter 
        todos={todos.filter(todo => todo.id != null)} 
        onDeleteAll={onDeleteAll}
        />
    </>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
