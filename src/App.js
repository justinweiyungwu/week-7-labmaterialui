// Todo.js
import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  Toolbar,
  AppBar,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      text: taskText,
      createdTime: new Date(),
      completed: false,
      completedTime: null,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    updatedTasks[index].completedTime = updatedTasks[index].completed
      ? new Date()
      : null;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todo App</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ margin: "20px" }}>
        <TextField
          label="New Task"
          variant="outlined"
          fullWidth
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addTask(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <List>
          {tasks.map((task, index) => (
            <ListItem key={index}>
              <Checkbox
                checked={task.completed}
                onChange={() => handleToggle(index)}
              />
              <ListItemText
                primary={task.text}
                secondary={
                  task.completed
                    ? `Completed at ${task.completedTime.toLocaleString()}`
                    : `Created at ${task.createdTime.toLocaleString()}`
                }
              />
              <ListItemSecondaryAction>
                {/* Add any secondary actions here */}
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default App;
