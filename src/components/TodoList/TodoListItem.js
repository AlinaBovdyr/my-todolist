import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TodoListItem = ({ value, isChecked, onChecked, onDelete }) => {
  return (
    <li className="TodoList__item">
      <label className="TodoList__task">
        <input
          className="TodoList__checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={onChecked}
        />
        <p
          className={classNames('TodoList__text', {
            'TodoList__text--checked': isChecked,
          })}
        >
          {value}
        </p>
      </label>
      <button
        className="TodoList__btn"
        type="submit"
        onClick={onDelete}
        disabled={!isChecked}
      >
        Удалить задачу
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  onChecked: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TodoListItem;
