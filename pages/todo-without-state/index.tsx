import { useRouter } from "next/router";
import React, { useRef } from "react";

const index = () => {
  const { query, push } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const todosURl = query.todos as string;
  const existingTodos = todosURl?.split(",").filter(Boolean) || [];

  const handleAddTodo = () => {
    try {
      if (!inputRef.current) throw new Error("No Current");
      const currentTodo = inputRef.current.value;
      const todoAlreadyExists = existingTodos.find(
        (todo) => todo === currentTodo
      );
      if (todoAlreadyExists) throw new Error("Todo already exists");
      const todos = [...existingTodos, currentTodo];
      push(`/todo-without-state?todos=${todos}`);
      inputRef.current.value = "";
    } catch (e: any) {
      alert(e.message);
    }
  };

  const handleRemoveTodo = (todo: string) => {
    const updatedTodos = existingTodos.filter((td) => td !== todo);
    push(`/todo-without-state?todos=${updatedTodos}`);
  };

  console.log("[query, todos]", existingTodos);

  return (
    <div>
      <input ref={inputRef as any} />
      <button onClick={handleAddTodo}>add</button>
      <div>
        {existingTodos.map((todo) => (
          <p key={todo} onClick={() => handleRemoveTodo(todo)}>
            {todo}
          </p>
        ))}
      </div>
    </div>
  );
};

export default index;
