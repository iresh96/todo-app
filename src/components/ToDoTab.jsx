import React, { useEffect, useState } from "react";

import { Container, Tabs, Tab, Paper, Grid } from "@material-ui/core";

import ToDo from "./ToDo";
import GroupPicker from "./Pickers/GroupPicker";

import "./ToDoTab.css";

function ToDoTab({
  todos,
  completeTodo,
  removeTodo,
  tabValue,
  searchValue,
  colorValue,
}) {
  const [value, setValue] = useState(0);
  const [newTodoList, setNewTodoList] = useState([]);
  const [group, setGroup] = useState("");

  useEffect(() => {
    if (!searchValue && !colorValue) {
      if (value === 1) {
        setNewTodoList(todos.filter((todo) => todo.isComplete));
      } else if (value === 0) {
        setNewTodoList(todos.filter((todo) => !todo.isComplete));
      }
    } else if (colorValue) {
      setNewTodoList(todos.filter((todo) => todo.color === colorValue));
      console.log("hit color");
    } else {
      setNewTodoList(
        todos.filter((todo) => {
          return todo.text.toLowerCase().includes(searchValue.toLowerCase());
        })
      );
    }
  }, [todos, value, searchValue, colorValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="sm" className="to-do-tab">
      <Paper square className={"todo-paper"}>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item xs={8}>
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
          </Grid>
          <Grid item xs={4}>
            <GroupPicker pickGroup={(group) => setGroup(group)} />
          </Grid>
        </Grid>
      </Paper>
      <ToDo
        todos={newTodoList}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        tabValue={tabValue}
        group={group}
      />
    </Container>
  );
}

export default ToDoTab;
