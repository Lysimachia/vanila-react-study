export type Status = 'yet' | 'process' | 'completed';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  active: boolean;
}

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  completeTodo: (id: number, status: string) => void;
  activeTodo: (id: number) => void;
}

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number, status: string) => void;
  activeTodo: (id: number) => void;
}
