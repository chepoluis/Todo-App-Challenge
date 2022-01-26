import { TodoGridItem } from "./TodoGridItem";
import { useFetch } from '../hooks/useFetch';

import './styles/TodoGrid.css';

export const TodoGrid = () => {
    const { loading, data: todos } = useFetch('https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io/get', 'GET');
    // const todos = !!data && data;
    console.log(todos)

    const renderCards = () => {
        return todos?.map((t: any) => { // Check interface
            // return <Card key={card.id} card={card} />;
            return <TodoGridItem key={ t.id } {...t} />
        });
    };

    return (
        <div>
            {
                loading ?
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                :
                <div className="todo-grid">
                    {
                        renderCards()
                        // todos.map(() => {
                        //     return (
                        //         <TodoGridItem />
                        //     )
                        // })
                    }
                </div>
            }
        </div>
    );
};
