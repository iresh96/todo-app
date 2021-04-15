import React, { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { Checkbox, Chip } from "@material-ui/core";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ToDoModal from "../components/Header/ToDoModal";

import "./ToDo.css";

const ToDo = ({ todos, completeTodo, onUpdate, removeTodo, group }) => {
  const [newtodos, setNewtodos] = useState([]);

  useEffect(() => {
    setNewtodos(todos);
  }, [todos]);

  //Drag and drop fuctionality
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(newtodos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setNewtodos(items);
  }

  //To do list
  const uigenerator = (array) => {
    return (
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {array.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided) => (
                    <div
                      className={
                        todo.isComplete
                          ? `todo-row complete ${todo.color}`
                          : `todo-row ${todo.color}`
                      }
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
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
                        <ToDoModal
                          editIcon={true}
                          todo={todo}
                          onUpdate={onUpdate}
                        />
                        <RiCloseCircleLine
                          onClick={() => removeTodo(todo.id)}
                          className="delete-icon"
                        />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
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

  //Grouping by Color
  if (group === "Color") {
    const sortedlist = newtodos.sort(compareColor);
    return uigenerator(sortedlist);
  }

  //Grouping by Priority
  if (group === "Priority") {
    const mapTodos = newtodos.map((todo) => {
      if (todo.priority === "Low") todo.temp = 3;
      if (todo.priority === "Medium") todo.temp = 2;
      if (todo.priority === "High") todo.temp = 1;
      return todo;
    });

    return uigenerator(mapTodos.sort((a, b) => a.temp - b.temp));
  }

  return uigenerator(newtodos);
};

export default ToDo;
