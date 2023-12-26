import { useState } from "react";
import Todos from "./Todos";
import TodoForm from "./TodoForm";

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

  const deleteTodo = (todoId) => {
    const filtered = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(filtered);
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === "") {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  return (
    <div style={style.container}>
      <h1 style={style.title}>ToDo Lists</h1>
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
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
