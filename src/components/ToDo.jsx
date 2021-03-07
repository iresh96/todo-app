import React, { useState } from "react";
import ToDoModal from "./ToDoModal";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Checkbox, Chip } from "@material-ui/core";

import "./ToDo.css";

const ToDo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <ToDoModal edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={
        todo.isComplete
          ? `todo-row complete ${todo.color}`
          : `todo-row ${todo.color}`
      }
      key={index}
    >
      <Checkbox
        checked={todo.isComplete}
        onClick={() => completeTodo(todo.id)}
        color="default"
      />
      <Chip ize="small" label={todo.priority} />
      <div key={todo.id} className="text">
        {todo.text}{" "}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default ToDo;
