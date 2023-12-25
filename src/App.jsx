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
    <div style={style.container}>
      <h1 style={style.title}>ToDo Lists</h1>
      <Todos todos={todos} />
    </div>
  );
}

const style = {
  container: {
    textAlign: "center",
    padding: "12px",
  },

  title: {
    fontSize: "40px",
  },
};

export default App;
