import React from "react";
import Todo from "./todo";

function Todos({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <Todo
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default Todos;
