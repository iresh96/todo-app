import React, { useState } from "react";

import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import "./ToDoHeader.css";

function ToDoHeader() {
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("");
  const [color, setColor] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const colorPlate = ["blue", "purple", "pink", "orange", "green"];
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
          <Button
            variant="contained"
            className="add-button"
            startIcon={<AddIcon />}
          >
            Add New
          </Button>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="subtitle1">Group By:</Typography>
        </Grid>
        <Grid item xs={4}>
          <FormControl className="formControl">
            <InputLabel id="priority-select-label">Priority</InputLabel>
            <Select
              labelId="priority-select-label"
              id="priority-select"
              value={priority}
              onChange={handlePriorityChange}
              className="formControl"
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl className="formControl">
            <InputLabel id="color-select-label">Color</InputLabel>
            <Select
              labelId="color-select-label"
              id="color-select"
              value={color}
              onChange={handleColorChange}
              className="formControl"
            >
              {colorPlate.map((color) => (
                <MenuItem value={color} className={color}>
                  {color}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ToDoHeader;
