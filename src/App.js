import React, { Component } from 'react';
import initialTodoList from './todolist.json';
import Container from './components/Container';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const { v4: uuidv4 } = require('uuid');

export default class App extends Component {
  state = {
    tasks: initialTodoList,
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

  deleteTask = taskId => {
    this.setState(({ tasks }) => ({
      tasks: [...tasks.filter(({ id, completed }) => id !== taskId)],
    }));
  };

  handleCheckedTask = taskId => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    }));
  };

  render() {
    const { tasks } = this.state;
    return (
      <Container>
        <TodoForm onSubmit={this.addTask} />
        <TodoList
          taskList={tasks}
          onCompleted={this.handleCheckedTask}
          onDeleteTodo={this.deleteTask}
        />
      </Container>
    );
  }
}
