import { TodoGridItem } from "./TodoGridItem";
import { useFetch } from '../hooks/useFetch';

import { useEffect, useState } from "react";
import { getTodos } from '../helpers/getTodos';

import './styles/TodoGrid.css';

export const TodoGrid = () => {
    const [todos, setTodos] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    /**
     * No usar el useFetch, usar getTodos y un useState, para guardar los objetos y pasarlos como props a TodoGridItem
     */

    useEffect(() => {
        setLoading(true);

        getTodos('GET').then((todos) => {
            setTodos(todos);

            setLoading(false);
        })
    }, []);

    const sortByDueDate = ( ) => {
        setTodos((todos: []) => {
            console.log(todos)
            // todos.sort((a.due))
        })
    }
    
    const renderCards = () => {
        return todos?.map((t: any) => { // Check interface
            // return <Card key={card.id} card={card} />;
            return <TodoGridItem key={ t.id } {...t} setTodos={ setTodos } />
        });
    };

    return (
        <>
            {/* <button onClick={ sortByDueDate }>
                Order by due date
            </button> */}
            <div className="header text-center">
                <h3>Todo App</h3>
            </div>
            {
                loading ?
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                :
                <div className="todo-grid">
                    
                    {
                        renderCards()
                    }
                </div>
            }
        </>
    );
};
