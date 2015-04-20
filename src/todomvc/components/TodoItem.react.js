import React, { PropTypes as ReactPropTypes } from "react";
import TodoActions from "../actions/TodoActions";
import TodoTextInput from "./TodoTextInput.react";
import cx from "react/lib/cx";

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  /**
   * @return {object}
   */
  render = () => {
    let todo = this.props.todo;

    let input;
    if (this.state.isEditing) {
      input =
        <TodoTextInput
          className="edit"
          onSave={this._onSave}
          value={todo.text} />;
    }

    // List items should get the class 'editing' when editing
    // and 'completed' when marked as completed.
    // Note that 'completed' is a classification while 'complete' is a state.
    // This differentiation between classification and state becomes important
    // in the naming of view actions toggleComplete() vs. destroyCompleted().
    return (
      <li
        className={cx({
          'completed': todo.complete,
          'editing': this.state.isEditing
        })}
        key={todo.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={this._onToggleComplete} />
          <label onDoubleClick={this._onDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy" onClick={this._onDestroyClick} />
        </div>
        {input}
      </li>
    );
  }

  _onToggleComplete = () => {
    TodoActions.toggleComplete(this.props.todo);
  }

  _onDoubleClick = () => {
    this.setState({isEditing: true});
  }

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param  {string} text
   */
  _onSave = (text) => {
    TodoActions.updateText(this.props.todo.id, text);
    this.setState({isEditing: false});
  }

  _onDestroyClick = () => {
    TodoActions.destroy(this.props.todo.id);
  }
}

TodoItem.propTypes = {
  todo: ReactPropTypes.object.isRequired
};

export default TodoItem;
