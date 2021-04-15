import React, { useState } from "react";
import HeaderText from "./Header/HeaderText";
import ToDoAdd from "./Header/ToDoAdd";

import ToDoHeader from "./Header/ToDoHeader";
import ToDoTab from "./ToDoTab";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [colorValue, setColorValue] = useState();

  //Adding New Todo to list
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  //Removing a todo
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  //Marking ascompleted
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
    console.log(todos);
  };

  return (
    <>
      <div className="header-top">
        <HeaderText />
        <ToDoAdd onSubmit={addTodo} />
      </div>
      <div className="todo-app">
        <ToDoHeader
          onSubmit={addTodo}
          getSearchValue={(value) => setSearchValue(value)}
          getColorValue={(color) => setColorValue(color)}
        />
        <ToDoTab
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          searchValue={searchValue}
          colorValue={colorValue}
        />
      </div>
    </>
  );
}

export default ToDoList;
