import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import TodoList from '../../Components/Todolist';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import queryString from 'query-string';

ListPage.propTypes = {

};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',

        },
        {
            id: 3,
            title: 'Code',
            status: 'new',

        },
    ];
    ////////////////////////
    const [todoList, setTodoList] = useState(initTodoList);//Sử dụng State để thay đổi các thuộc tính trong mảng


    const handleTodoClick = (todo, idx) => { // Tạo ra hàm để thực hiện sau mỗi lần click 

        const newtodoList = [...todoList];// tạo ra mảng mới 

        console.log(todo, idx);//in ra giá trị thành phần của mảng và vị trí của thành phần
        newtodoList[idx] = { //Thay đổi phụ thuộc vào vị trí trong mảng 
            ...newtodoList[idx],
            status: newtodoList[idx].status === 'new' ? 'completed' : 'new',// thay đổi trạng thái của vị trí đó 
        };
        setTodoList(newtodoList);// gán giá trị mới cho vị trí trong mảng
    }

    ///////////////////////////
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [filterTodolist, setfilterTodolist] = useState(() => {
        const param = queryString.parse(location.search);
        // console.log(param);

        return param.status || 'all';
    });

    useEffect(() => {
        const param = queryString.parse(location.search);
        setfilterTodolist(param.status || 'all');
    }, [location.search])

    const handleShowAllView = () => {
        // setfilterTodolist('tatca');//Hiển thị all
        const queryParam = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParam),
        })
    }
    const handleShowCompleted = () => {
        // setfilterTodolist('completed');//Hiển thị completed
        const queryParam = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParam),
        })
    }
    const handleShowNewClick = () => {
        const queryParam = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParam),
        })
        // setfilterTodolist('new');//Hiển thị new

    }

    const referedTodolist = todoList.filter(todo => filterTodolist === 'tatca' || filterTodolist === todo.status);

    console.log(referedTodolist);
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={referedTodolist} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAllView}>ShowAll</button>
                <button onClick={handleShowCompleted}>ShowCompleted</button>
                <button onClick={handleShowNewClick}>ShowNew</button>
            </div>
        </div>

    );

}

export default ListPage;