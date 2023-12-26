const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  const getTodoTitlteStyle = () => {
    if (todo.completed) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.checkbox}
        onChange={() => {
          toggleCompleted(todo.id);
        }}
      />
      <p style={getTodoTitlteStyle()}>{todo.title}</p>
      <button
        style={styles.button}
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        x
      </button>
    </div>
  );
};

const styles = {
  todoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  checkbox: {
    marginRight: "12px",
    width: "18px",
    height: "18px",
  },
  button: {
    backgroundColor: "#BB0000",
    color: "#ffffff",
    height: "20px",
    width: "20px",
    border: "none",
    borderRadius: "100%",
  },
};

export default TodoItem;
