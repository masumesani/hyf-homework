import React, { Component } from "react";
import TodoListItem from "./TodoListItem";
import AddTodo from "./AddTodo";

class MyTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [] };
  }
  componentDidMount() {
    let self = this;
    fetch(`https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw`)
      .then(res => res.json())
      .then(
        result => self.setState({
          todoList: result.map(todo => {
            return {
              id: todo.id,
              title: todo.description,
              date: new Date(todo.deadline)
            }
          })
        }
        ))
  }
  onToggle = (id) => {
    this.setState({
      todoList: this.state.todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    });
  };
  onDelete = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((todo) => todo.id !== id),
    });
  };
  onAdd = (str, date) => {
    if (str === "") return;
    let maxId = Math.max(...this.state.todoList.map((todo) => todo.id));
    let validDate = new Date();
    if (date < validDate) {
      alert("Time has flied,please choose a valid date");
      return
    }
    this.setState({
      todoList: [
        { id: maxId + 1, title: str, date: date },
        ...this.state.todoList,
      ],
    });
  };

  onEditStarted = (id) => {
    this.setState({
      todoList: this.state.todoList.map(todo => todo.id === id ?
        { ...todo, editing: true } : todo)
    })
  }
  onChange = (str) => {
    this.setState({
      todoList: this.state.todoList.map(
        todo => todo.editing ? { ...todo, title: str } : todo)
    })
  };


  onSave = (id, todoText) => {
    console.log(todoText)
    if (todoText === "") {
      this.setState({
        todoList: this.todoList.map(todo => todo.id === id ?
          { ...todo, editing: false } : todo)
      })
    }
    this.setState({
      todoList: this.state.todoList.map(todo =>
        todo.id === id ? { ...todo, title: todoText, editing: false } : todo)
    })
  }

  render() {
    return (
      <div>
        <AddTodo onAdd={this.onAdd} />
        {this.state.todoList.length === 0 ? (
          <p>No Item</p>
        ) : (
            this.state.todoList.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                onChange={this.onChange}
                onToggle={this.onToggle}
                onDelete={this.onDelete}
                onEditStarted={this.onEditStarted}
                onSave={this.onSave}
              />
            ))
          )}
      </div>
    );
  }
}

export default MyTodoList;

