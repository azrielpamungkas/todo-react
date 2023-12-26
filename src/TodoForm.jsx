import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle("");
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div style={styles.container}>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          style={styles.formInput}
          placeholder="Add to your Todo"
          type="text"
          value={title}
          onChange={(event) => {
            handleChangeTitle(event);
          }}
        />
        <button type="submit" style={styles.button}>
          Add
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "12px",
  },
  formInput: {
    height: "60px",
    width: "40%",
    fontSize: "14px",
    padding: "0 16px",
  },
  button: {
    height: "65px",
    fontSize: "16px",
  },
};

export default TodoForm;
