import React, { useEffect, useState } from "react";

import { Container, Tabs, Tab, Paper } from "@material-ui/core";

import "./ToDoTab.css";
import ToDo from "./ToDo";

function ToDoTab({ todos, completeTodo, removeTodo, updateTodo, tabValue }) {
  const [value, setValue] = useState(0);
  const [newTodoList, setNewTodoList] = useState([]);

  useEffect(() => {
    if (value === 1) {
      setNewTodoList(todos.filter((todo) => todo.isComplete));
    } else if (value === 0) {
      setNewTodoList(todos.filter((todo) => !todo.isComplete));
    }
  }, [todos, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="sm" className="to-do-tab">
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="ToDo" value={0} />
          <Tab label="Completed" value={1} />
        </Tabs>
      </Paper>
      <ToDo
        todos={newTodoList}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        tabValue={tabValue}
      />
    </Container>
  );
}

export default ToDoTab;
