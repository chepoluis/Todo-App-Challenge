import { formatDate } from '../helpers/commons';
import { getTodos } from '../helpers/getTodos';
import { colors } from '../helpers/colors';

import './styles/TodoGridItem.css';

export const TodoGridItem = ( props: any ) => {
    const { description, dueDate, isComplete, id } = props;

    const complete = () => {
        getTodos('PATCH', id).then(({ status }) => {
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
        <div className = "card-wrapper mr-5" style={{ "marginRight": "20px", "marginBottom": "15px" }}>
            <div className = "card-top" style={{"backgroundColor": colors[1].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header" style={{"backgroundColor": isComplete && colors[4].primaryColor, "borderRadius": "10px"}}>{ isComplete ? 'Completed' : 'Not completed' }</span>
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
