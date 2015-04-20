import React, { PropTypes as ReactPropTypes } from "react";
import TodoActions from "../actions/TodoActions";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * @return {object}
   */
  render = () => {
    let allTodos = this.props.allTodos;
    let total = Object.keys(allTodos).length;

    if (total === 0) {
      return null;
    }

    let completed = 0;
    for (var key in allTodos) {
      if (allTodos[key].complete) {
        completed++;
      }
    }

    let itemsLeft = total - completed;
    let itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
    itemsLeftPhrase += 'left';

    let clearCompletedButton;

    if (completed) {
      clearCompletedButton =
        <button
          id="clear-completed"
          onClick={this._onClearCompletedClick}>
          Clear completed ({completed})
        </button>;
    }

    return (
      <footer id="header">
        <span id="todo-count">
          <strong>
            {itemsLeft}
          </strong>
          {itemsLeftPhrase}
        </span>
        {clearCompletedButton}
      </footer>
    );
  }

  /**
   * Event handler to delete all completed TODOs
   */
  _onClearCompletedClick = () => {
    TodoActions.destroyCompleted();
  }
}

Footer.propTypes = {
  allTodos: ReactPropTypes.object.isRequired
};

export default Footer;
