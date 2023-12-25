import { useState } from "react";
import Todos from "./Todos";

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
      <Todos todos={todos} />
    </>
  );
}

export default App;
