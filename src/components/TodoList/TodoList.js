import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';

const TodoList = ({ taskList }) => {
  return (
    <ul>
      {taskList.map(({ id, text }) => {
        return (
          <li key={id}>
            <TodoListItem value={text} />
          </li>
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
};

export default TodoList;
