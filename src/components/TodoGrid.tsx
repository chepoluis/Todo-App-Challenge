import { TodoGridItem } from "./TodoGridItem";

import { useEffect, useState } from "react";
import { getTodos } from '../helpers/getTodos';

import './styles/TodoGrid.css';

export const TodoGrid = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        getTodos('GET').then((todos) => {
            setTodos(todos);

            setLoading(false);
        })
    }, []);
    
    const sortByDueDate = ( ) => {
        const copy = [...todos];
        copy.sort((a: any, b: any) => {
            const aDate: any = new Date(a.dueDate);
            const bDate: any = new Date(b.dueDate);

            return aDate - bDate;
        })

        setTodos(copy);
    }

    return (
        <>
            <div className="header text-center">
                <h3>Todo App</h3>
            </div>
            {
                loading ?
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                :
                <div>
                    <button className="btn btn-outline-primary" style={{ "marginTop": "10px", "marginLeft": "10px" }} onClick={ sortByDueDate }>
                        Order by due date
                    </button>

                    <div className="todo-grid">
                        {
                            todos.map((t: any) => {
                                return <TodoGridItem key={ t.id } {...t} setTodos={ setTodos } />
                            })
                        }
                    </div>
                </div>
            }
        </>
    );
};
