import React, { Component } from 'react';
import './TodoForm.scss';

export default class TodoForm extends Component {
  state = {
    text: '',
  };

  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      text: '',
    });

    this.props.onSubmit(this.state.text);
  };

  render() {
    const { text } = this.state;
    return (
      <form className="TodoForm" onSubmit={this.handleSubmit}>
        <label className="TodoForm__field">
          <span className="TodoForm__label">Что должно быть сделано?</span>
          <input
            className="TodoForm__input"
            type="text"
            value={text}
            onChange={this.handleChange}
          />
        </label>
        <button className="TodoForm__btn" type="submit">
          Добавить задачу
        </button>
      </form>
    );
  }
}
