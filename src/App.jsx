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

  const toggleCompleted = (todoId) => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updateTodo);
  };

  return (
    <div style={style.container}>
      <h1 style={style.title}>ToDo Lists</h1>
      <Todos todos={todos} toggleCompleted={toggleCompleted} />
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
