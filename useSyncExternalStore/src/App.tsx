import { useSyncExternalStore } from "react";
import { todosStore } from "./store.js";
import ChatIndicator from "./ChatIndicator.js";

export default function App() {
  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot
  );

  return (
    <>
      <button onClick={() => todosStore.addTodo()}>Add todo</button>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <ChatIndicator />
    </>
  );
}
