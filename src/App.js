import { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";
import initialTodos from "./todos.json";

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodos = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    console.log(todos);

    return (
      <>
        <p
          style={{
            color: "teal",
            fontWeight: 600,
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Общее количество задач: {todos.length}
        </p>
        <p
          style={{
            color: "teal",
            fontWeight: 600,
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Общее количество выполненных задач:
        </p>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodos} />
      </>
    );
  }
}

export default App;
