import { useFetch } from '../hooks/useFetch';

export const TodoItem = () => {
    const { loading, data } = useFetch('https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io/get', 'GET');

    console.log(data)

    return (
        <div>
            <h1>Todo Item</h1>

            {
                loading ?
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                :
                    <h1>:D</h1>
            }
        </div>
    );
};
