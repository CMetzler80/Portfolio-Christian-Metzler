"use client";


import { useEffect, useState } from 'react'

import { TodoList } from "../../components/ui/TodoList"
import { TodoForm } from "../../components/ui/TodoForm"
import type { Todo } from '../../interfaces/Todo';
import TodoFilter from '../../components/ui/TodoFilter'
import useLocalStorage from '../../Hooks/useLocalStorage';




function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('Schlüssel_Local', [
    { todoID: "1", todoText: "Aufgabe 1", status: true },
    { todoID: "2", todoText: "Aufgabe 2", status: false },
    { todoID: "3", todoText: "Aufgabe 3", status: true },
  ]);

  const [filter, setFilter] = useState<"All" | "Done" | "Open">("All");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Done") return todo.status;
    if (filter === "Open") return !todo.status;
    return true;
  });

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      todoID:
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      todoText: text,
      status: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.todoID !== id));
  };

  const onStatusChange = (todoID: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.todoID === todoID ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  return (
    <>
      <h1>Hallo Iam a Todolist</h1>


      {/*nimmt die addTodo Funktion mit*/}
      <TodoForm addTodo={addTodo} />

      <TodoFilter
        filter={filter}
        filterChange={setFilter}
      />

      <h2>Aufgabenliste</h2>
      <TodoList todos={filteredTodos} onDeleteTodo={deleteTodo} onStatusChange={onStatusChange} />

    </>
  )

}
export default App
