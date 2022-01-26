import { formatDate } from '../helpers/commons';

import './styles/TodoGridItem.css';

type TodoGridItemsArgs = {
    description: string,
    dueDate: string,
    id: string,
    isComplete: boolean
}

export const TodoGridItem = ( { description, dueDate, isComplete }: TodoGridItemsArgs) => {

    return (
        <div className="card">
            <p>{ description }</p>
            <p>{ formatDate(dueDate) }</p>
            <p>{ isComplete.toString() }</p>
        </div>
    );
};
