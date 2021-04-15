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
import { TiEdit } from "react-icons/ti";

import PriorityPicker from "../Pickers/PriorityPicker";
import ColorPicker from "../Pickers/ColorPicker";

import "./ToDoAdd.css";

//Todo adding Modala
function ToDoModal({ onSubmit, editIcon, todo, onUpdate }) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(editIcon ? todo.color : "");
  const [priority, setPriority] = useState(editIcon ? todo.priority : "");
  const [input, setInput] = useState(editIcon ? todo.text : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Creating new Todo/Updating todo
  const handleSubmit = (e) => {
    if (editIcon) {
      e.preventDefault();
      onUpdate(todo.id, {
        id: uniqid(),
        text: input,
        color: color,
        priority: priority,
        date: Date.now(),
        isComplete: false,
      });
    } else {
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
    }
  };
  return (
    <div>
      {editIcon ? (
        <TiEdit onClick={handleClickOpen} />
      ) : (
        <Button
          variant="contained"
          className="add-button"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Add New
        </Button>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {editIcon ? "Edit todo" : "Add new Todo"}
        </DialogTitle>
        <DialogContent className="add-todo-dialog">
          <form onSubmit={handleSubmit}>
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
              {editIcon ? "Save" : "Add"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ToDoModal;
