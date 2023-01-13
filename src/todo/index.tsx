import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {todoStore} from "./todo-store";

const Todo = observer(() => {

    useEffect(() => {
        todoStore.getListTodos()
    }, [todoStore.limit, todoStore.page])

    return (
        <div className='counter'>
            <h2>Data fetching && this bilan muammo</h2>
            <ul>
                {
                    todoStore.todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.id}. {todo.title}
                        </li>
                    ))
                }
            </ul>

            <div className='mt-1'>
                <button
                    className='round-btn primary'
                    onClick={() => todoStore.prevPage()}
                >
                    {'<'}
                </button>
                <button
                    className='round-btn primary'
                    onClick={() => todoStore.nextPage()}
                    // onClick={todoStore.nextPage} // Bu yerda this bn muammo
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
});

export {Todo};