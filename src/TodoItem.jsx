const TodoItem = ({ todo }) => {
  return (
    <div style={styles.todoItem}>
      <p>{todo.title}</p>
    </div>
  );
};

const styles = {
  todoItem: {
    border: "2px solid gray",
    fontSize: "16px",
  },
};

export default TodoItem;
