import Footer from "./Footer.react";
import Header from "./Header.react";
import MainSection from "./MainSection.react";
import React from "react";
import TodoStore from "../stores/TodoStore";

/**
 * Retrieve the current Todo data from the TodoStore
 */
function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = getTodoState();
  }

  componentDidMount = () => {
    TodoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount = () => {
    TodoStore.removeChangeListener(this._onChange);
  }

  /**
   * @return {object}
   */
  render = () => {
    return (
      <div>
        <Header />
        <MainSection
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete} />
        <Footer allTodos={this.state.allTodos} />
      </div>
    );
  }

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange = () => {
    this.setState(getTodoState());
  }
}

export default TodoApp;
