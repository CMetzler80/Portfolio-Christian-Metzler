
import type { Todo } from '../../interfaces/Todo.js';
import { Button } from './Button';

export interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onStatusChange: (id: string) => void;
}


  


export function TodoList({ todos, onDeleteTodo, onStatusChange }: TodoListProps) {
  return (
    <table>
      <tbody>
        {todos.map(todo => (
          <tr key={todo.todoID}>
            <td>{todo.todoText}</td>
            <td><input type="checkbox" name="status" checked={todo.status} onChange={() => onStatusChange(todo.todoID)}/></td>
            <td>
              <Button
                id={todo.todoID}
                onDelete={onDeleteTodo}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};