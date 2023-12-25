import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Calisthenic",
      completed: true,
    },
  ]);

  return (
    <>
      <h1>Hello World!</h1>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>;
      })}
    </>
  );
}

export default App;
