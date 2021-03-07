import React, { useState } from "react";
import ToDoModal from "./ToDoModal";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Checkbox, Chip } from "@material-ui/core";

import "./ToDo.css";

const ToDo = ({ todos, completeTodo, removeTodo, updateTodo, group }) => {
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

  const compare = (a, b) => {
    if (group === "Color") {
      if (a.color < b.color) {
        return -1;
      }
      if (a.color > b.color) {
        return 1;
      }
      return 0;
    }
    if (group === "Priority") {
      if (a.priority < b.priority) {
        return -1;
      }
      if (a.priority > b.priority) {
        return 1;
      }
      return 0;
    }
  };

  if (edit.id) {
    return <ToDoModal edit={edit} onSubmit={submitUpdate} />;
  }

  if (group !== "") {
    const sortedlist = todos.sort(compare);
    return sortedlist.map((todo, index) => (
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
