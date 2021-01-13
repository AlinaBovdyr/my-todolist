import React, { Component } from 'react';

import Container from './components/Container';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const { v4: uuidv4 } = require('uuid');

export default class App extends Component {
  state = {
    tasks: [],
  };

  addTask = text => {
    const task = {
      id: uuidv4(),
      text,
      completed: false,
    };

    this.setState(prevState => {
      return {
        tasks: [...prevState.tasks, task],
      };
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <Container>
        <TodoForm onSubmit={this.addTask} />
        <TodoList taskList={tasks} />
      </Container>
    );
  }
}
