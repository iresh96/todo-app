import React, { useState } from "react";
import ToDoModal from "./ToDoModal";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Checkbox, Chip, Container } from "@material-ui/core";

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

  const compareColor = (a, b) => {
    if (a.color < b.color) {
      return -1;
    }
    if (a.color > b.color) {
      return 1;
    }
    return 0;
  };

  const uigenerator = (array) => {
    return array.map((todo, index) => (
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

  if (edit.id) {
    return <ToDoModal edit={edit} onSubmit={submitUpdate} />;
  }

  if (group === "Color") {
    const sortedlist = todos.sort(compareColor);
    return uigenerator(sortedlist);
  }

  if (group === "Priority") {
    const newTodos = todos.map((todo) => {
      if (todo.priority === "Low") todo.temp = 3;
      if (todo.priority === "Medium") todo.temp = 2;
      if (todo.priority === "High") todo.temp = 1;
      return todo;
    });

    return uigenerator(newTodos.sort((a, b) => a.temp - b.temp));
  }
  return uigenerator(todos);
};

export default ToDo;
