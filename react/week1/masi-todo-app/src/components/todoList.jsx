import React, { useState } from "react";
import ListItem from "./listItem";

const initialMockedTodoes = [
  { id: 1, title: "Get out of bed", date: new Date("09-13-2017"), done: true },
  { id: 2, title: "Brush teeth", date: new Date("09-14-2017") },
  { id: 3, title: "Eat breakfast", date: new Date("09-15-2017") }
];

const MyTodoList = () => {
  const [todoList, setTodoList] = useState(initialMockedTodoes);
  const changeState = id => {
    let index = todoList.findIndex(todo => todo.id === id);
    let arrayAheadOfTarget = todoList.slice(0, index);
    let target = Object.assign({}, todoList[index], {
      done: !todoList[index].done
    });
    let arrayAfterTarget = todoList.slice(index + 1);
    let out = [...arrayAheadOfTarget, target, ...arrayAfterTarget];
    setTodoList(out);
  };
  return (
    <div>
      {todoList.map(todo => (
        <ListItem todo={todo} onChange={changeState} />
      ))}
    </div>
  );
};

export default MyTodoList;
