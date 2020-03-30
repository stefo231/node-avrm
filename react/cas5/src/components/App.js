import React, { Component } from "react";
import Todos from "./Todos";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      car: {
        model: "Volvo",
        year: 2009
      },
      todos: [
        { id: 1, todo: "React Course", done: false },
        { id: 2, todo: "Eat Lunch", done: false },
        { id: 3, todo: "Go To Sleep", done: false }
      ],
      newTodo: ""
    };
  }

  updateCar = (carModel, carYear) => {
    this.setState({
      car: {
        ...this.state.car,
        model: carModel,
        year: carYear
      }
    });
  };

  addDays = () => {
    this.setState({
      days: [...this.state.days, "Friday"]
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = item => {
    if (item !== "") {
      var obj = {
        id: this.state.todos.length + 1,
        todo: item,
        done: false
      };

      this.setState({ todos: [...this.state.todos, obj], newTodo: "" });
    } else {
      alert("Vnesi vrednost");
    }
  };

  markedCheckedTodos = todoObject => {
    this.setState({
      todos: [
        ...this.state.todos.map(row =>
          row.id === todoObject.id
            ? { id: row.id, todo: row.todo, done: !row.done }
            : row
        )
      ]
    });
  };

  render() {
    console.log(this.state.todos);
    return (
      <div id="app">
        {/* <h2>{this.state.car.model}</h2>
        <p>{this.state.car.year}</p>
        <button type="button" onClick={() => this.updateCar("Nissan", 2012)}>
          Change Details
        </button>
        {this.state.days.map((day, i) => {
          return <p key={i}>{day}</p>;
        })}
        <button
          onClick={() => {
            this.addDays();
          }}
          type="button"
        >
          Add Days
        </button> */}
        <input
          type="text"
          placeholder="Add New ToDo"
          name="newTodo"
          value={this.state.newTodo}
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            this.addTodo(this.state.newTodo);
          }}
        >
          Add ToDo
        </button>
        <Todos todos={this.state.todos} markCheck={this.markedCheckedTodos} />
      </div>
    );
  }
}

export default App;
