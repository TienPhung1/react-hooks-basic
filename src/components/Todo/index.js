function Todo({ todos, title, deleteDataTodo }) {
  const handleDelete = (id) => {
    deleteDataTodo(id);
  };
  return (
    <div className="todo-container">
      <div className="title">{title}</div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <li className="todo-child">
              {todo.title}{" "}
              <span style={{ cursor: "pointer" }} onClick={handleDelete}>
                x
              </span>{" "}
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
