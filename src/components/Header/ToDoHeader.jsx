import React, { useState } from "react";

import { Container, Grid, TextField, Typography } from "@material-ui/core";

import ToDoAdd from "./ToDoAdd";

import "./ToDoHeader.css";

import ColorPicker from "../ColorPicker";
import PriorityPicker from "../PriorityPicker";

function ToDoHeader() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container maxWidth="sm" className="header-container">
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Grid item xs={6} className="control">
          <TextField
            id="outlined-multiline-flexible"
            label="Search"
            multiline
            rowsMax={4}
            value={search}
            onChange={handleSearch}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <ToDoAdd />
        </Grid>

        <Grid item xs={4}>
          <Typography variant="subtitle1">Group By:</Typography>
        </Grid>
        <Grid item xs={4}>
          <PriorityPicker />
        </Grid>
        <Grid item xs={4}>
          <ColorPicker />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ToDoHeader;
