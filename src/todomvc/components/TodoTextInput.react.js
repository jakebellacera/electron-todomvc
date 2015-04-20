import React, { PropTypes as ReactPropTypes } from "react";

const ENTER_KEY_CODE = 13;

class TodoTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || ''
    };
  }

  /**
   * @return {object}
   */
  render = () => {
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true} />
    );
  }

  /**
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways.
   */
  _save = () => {
    this.props.onSave(this.state.value);
    this.setState({ value: '' });
  }

  /**
   * @param {object} event
   */
  _onChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  /**
   * @param  {object} event
   */
  _onKeyDown = (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }
}

TodoTextInput.propTypes = {
  className: ReactPropTypes.string,
  id: ReactPropTypes.string,
  placeholder: ReactPropTypes.string,
  onSave: ReactPropTypes.func.isRequired,
  value: ReactPropTypes.string
};

export default TodoTextInput;
