import React, { useEffect, useState } from "react";

import { Container, Grid, TextField } from "@material-ui/core";

import ToDoAdd from "./ToDoAdd";

import "./ToDoHeader.css";

import ColorPicker from "../Pickers/ColorPicker";

function ToDoHeader({ onSubmit, getSearchValue, getColorValue }) {
  const [search, setSearch] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    getSearchValue(search);
    getColorValue(color);
  }, [getSearchValue, search, color, getColorValue]);

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
          <ToDoAdd onSubmit={onSubmit} />
        </Grid>
        <Grid item xs={4} className="filter-text">
          Filter By
        </Grid>
        <Grid item xs={4}>
          <ColorPicker pickColor={(color) => setColor(color)} none={true} />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Container>
  );
}

export default ToDoHeader;
