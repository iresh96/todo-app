import React, { useState } from "react";
import ToDoHeader from "./Header/ToDoHeader";
import ToDoTab from "./ToDoTab";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [colorValue, setColorValue] = useState();

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(newTodos);
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

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
    </>
  );
}

export default ToDoList;
