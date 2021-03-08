import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { Checkbox, Chip } from "@material-ui/core";

import "./ToDo.css";

const ToDo = ({ todos, completeTodo, removeTodo, group }) => {
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
        </div>
      </div>
    ));
  };

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
