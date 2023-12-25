const TodoItem = ({ todo, toggleCompleted }) => {
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
    </div>
  );
};

const styles = {
  todoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    marginRight: "12px",
    width: "18px",
    height: "18px",
  },
};

export default TodoItem;
