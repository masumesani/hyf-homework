import React, { useState } from "react";
import TodoListItem from "./TodoListItem";
import AddTodo from "./AddTodo";
const initialMockedTodos = [
  { id: 1, title: "Get out of bed", date: new Date("09-13-2017"), done: true },
  { id: 2, title: "Brush teeth", date: new Date("09-14-2017") },
  { id: 3, title: "Eat breakfast", date: new Date("09-15-2017") },
];

const MyTodoList = () => {
  const [todoList, setTodoList] = useState(initialMockedTodos);
  const onToggle = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  const onDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  const onAdd = (str) => {
    if (str === "") return;
    let maxId = Math.max(...todoList.map((todo) => todo.id));
    setTodoList([{ id: maxId + 1, title: str, date: new Date() }, ...todoList]);
  };
  return (
    <div>
      <AddTodo onAdd={onAdd} />
      {todoList.length === 0 ? (
        <p>No Item</p>
      ) : (
        todoList.map((todo) => (
          <TodoListItem todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default MyTodoList;
