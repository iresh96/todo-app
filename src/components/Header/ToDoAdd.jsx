import React, { useState } from "react";
import uniqid from "uniqid";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import "./ToDoAdd.css";
import PriorityPicker from "../Pickers/PriorityPicker";
import ColorPicker from "../Pickers/ColorPicker";

function ToDoAdd({ edit, onSubmit }) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("pink");
  const [priority, setPriority] = useState("Low");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    onSubmit({
      id: uniqid(),
      text: input,
      color: color,
      priority: priority,
      date: Date.now(),
      isComplete: false,
    });
    setInput("");
    setOpen(false);
  };
  return (
    <div>
      <Button
        variant="contained"
        className="add-button"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add New
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add new todo</DialogTitle>
        <DialogContent className="add-todo-dialog">
          <form onSubmit={handleAddTodo}>
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="text"
              value={input}
              required
              onChange={handleChange}
              fullWidth
            />
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              className="dialog-pickers"
            >
              <Grid item xs={6} className="control">
                <PriorityPicker
                  required
                  pickPriority={(priority) => setPriority(priority)}
                />
              </Grid>
              <Grid item xs={6} className="control">
                <ColorPicker required pickColor={(color) => setColor(color)} />
              </Grid>
            </Grid>

            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ToDoAdd;
