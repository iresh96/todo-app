import React, { useState } from "react";

import { Container, Tabs, Tab, Paper } from "@material-ui/core";

import "./ToDoTab.css";

function ToDoTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
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
    </Container>
  );
}

export default ToDoTab;
