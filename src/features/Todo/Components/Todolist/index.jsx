import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';


TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,//khai báo giá trị từ thằng cha là hàm
};
TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,//không bắt buộc
};

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick) return;//nếu không có giá trị return
        onTodoClick(todo, idx);//nếu có thì 

    }
    return (
        <ul className="todo-list">
            {todoList.map((todo, idx) =>
            (
                <li key={todo.id} className={classNames({
                    'todo-item': true,
                    completed: todo.status === 'completed'
                })}
                    onClick={() => handleTodoClick(todo, idx)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
