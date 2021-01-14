import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ taskList, onCompleted, onDeleteTodo }) => {
  return (
    <ul className="TodoList">
      {taskList.map(({ id, text, completed }) => {
        return (
          <TodoListItem
            key={id}
            value={text}
            isChecked={completed}
            onChecked={() => {
              onCompleted(id);
            }}
            onDelete={() => {
              onDeleteTodo(id);
            }}
          />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  taskList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  onCompleted: PropTypes.func,
  onDeleteTodo: PropTypes.func,
};

export default TodoList;
