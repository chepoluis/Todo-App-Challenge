import { formatDate } from '../helpers/commons';

import './styles/TodoGridItem.css';
import { getTodos } from '../helpers/getTodos';
import { useEffect, useState } from 'react';

type TodoGridItemsArgs = {
    description: string,
    dueDate: string,
    id: string,
    isComplete: boolean,
    setTodos: []
}

const colors = [
    {
        primaryColor : "#5D93E1",
        secondaryColor : "#ECF3FC"
    },
    {
        primaryColor : "#F9D288",
        secondaryColor : "#FEFAF1"
    },
    {
        primaryColor : "#5DC250",
        secondaryColor : "#F2FAF1"
    },
    {
        primaryColor : "#F48687",
        secondaryColor : "#FDF1F1"
    },
    {
        primaryColor : "#B964F7",
        secondaryColor : "#F3F0FD"
    }
]

export const TodoGridItem = ( props: any ) => {
    const { description, dueDate, isComplete, id } = props;

    const complete = () => {
        console.log('Completed');
        // setTodoCompletedId(id);
        getTodos('PATCH', id).then(({ status }) => {
            console.log(status)

            if (status === 'success') {
                props.setTodos((val: any) => { 
                    return val.map((todo: any) => {
                        
                        if (id === todo.id) {
                            return { ...todo, isComplete: !todo.isComplete }
                        }

                        return todo;
                    })
                })
            }
        })
    }
    
    const overdue = () => {
        const today = new Date();
        const todoDate = new Date(dueDate);

        return todoDate.getTime() > today.getTime();
    }

    return (
        // <div className="card">
        //     <p>{ description }</p>
        //     <p>{ formatDate(dueDate) }</p>
        //     <p>{ isComplete ? 'Completed' : 'Not completed' }</p>
        //     { 
        //         (!overdue() && !isComplete && dueDate != null) && <p>Overdue</p>

        //     }

        //     <button
        //         onClick={ complete }
        //         className='btn btn-outline-primary'
        //     >
        //         Complete(icon)
        //     </button>
        // </div>

        <div className = "card-wrapper mr-5" style={{ "marginRight": "20px", "marginBottom": "15px" }}>
            <div className = "card-top" style={{"backgroundColor": colors[1].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header" style={{"backgroundColor": colors[3].secondaryColor, "borderRadius": "10px"}}>{ isComplete ? 'Completed' : 'Not completed' }</span>
                <p className = "mt-3">{description}</p>
                <p>{ formatDate(dueDate) }</p>
                { 
                    (!overdue() && !isComplete && dueDate != null) && <p>Overdue</p>

                }

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className = "far fa-ballot-check mr-3" style={{"color" : colors[4].primaryColor, "cursor" : "pointer"}} onClick={ complete }></i>
                </div>
            </div>
        </div>
    );
};
