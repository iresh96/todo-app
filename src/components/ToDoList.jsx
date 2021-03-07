import React, { useState } from "react";
// import ToDoModal from "./ToDoModal";
// import ToDo from "./ToDo";
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

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
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

  // const clearFilters = () => {
  //   setColorValue("");
  // };

  return (
    <>
      <ToDoHeader
        onSubmit={addTodo}
        getSearchValue={(value) => setSearchValue(value)}
        getColorValue={(color) => setColorValue(color)}
        // clearFilters={() => clearFilters()}
      />
      <ToDoTab
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        searchValue={searchValue}
        colorValue={colorValue}
      />
    </>
  );
}

export default ToDoList;
