import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ value }) => {
  return <p>{value}</p>;
};

TodoListItem.propTypes = {
  value: PropTypes.string,
};

export default TodoListItem;
