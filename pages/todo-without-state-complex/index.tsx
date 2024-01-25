import { useRouter } from "next/router";
import { useRef } from "react";

// localhost:3000/todo-without-state-complex?todos=[{%22id%22:1,%22description%22:%22Cool%22,%22isCompleted%22:true},{%22id%22:2,%22description%22:%22Test%22,%22isCompleted%22:true}]

interface ITodo {
  id: string;
  description: string;
  isCompleted: boolean;
}

const index = () => {
  const { query, push } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const todosURl = query.todos as string;
  console.log("[todosURl]", todosURl);
  //   const existingTodos = todosURl?.split(",").filter(Boolean) || [];
  const formattedTodos: ITodo[] = todosURl ? JSON.parse(todosURl) : [];
  console.log("[formattedTodos]", formattedTodos);

  const handleAdd = () => {
    if (!inputRef.current) return;
    const currentDescription = inputRef.current.value;
    const newTodo: ITodo = {
      description: currentDescription,
      id: new Date().getTime().toString(),
      isCompleted: false,
    };
    const stringfiedTodos = formattedTodos.map((td) => {
      return JSON.stringify(td);
    });
    const updatedTodos = [...stringfiedTodos, JSON.stringify(newTodo)];
    push(`/todo-without-state-complex?todos=[${updatedTodos}]`);
    inputRef.current.value = "";
  };

  //   const handleAddTodo = () => {
  //     try {
  //       if (!inputRef.current) throw new Error("No Current");
  //       //   const currentTodo = inputRef.current.value;
  //       //   const todoAlreadyExists = existingTodos.find(
  //       //     (todo) => todo === currentTodo
  //       //   );
  //       //   if (todoAlreadyExists) throw new Error("Todo already exists");
  //       const todos = [...existingTodos, currentTodo];
  //       push(`/todo-without-state?todos=${todos}`);
  //       inputRef.current.value = "";
  //     } catch (e: any) {
  //       alert(e.message);
  //     }
  //   };

  //   const handleRemoveTodo = (todo: string) => {
  //     const updatedTodos = existingTodos.filter((td) => td !== todo);
  //     push(`/todo-without-state?todos=${updatedTodos}`);
  //   };

  //   console.log("[query, todos]", existingTodos);

  return (
    <div>
      <input ref={inputRef as any} />
      <button onClick={handleAdd}>add</button>
      <div>
        {formattedTodos?.map((todo) => (
          <p key={todo.id} onClick={() => {}}>
            {todo.description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default index;
