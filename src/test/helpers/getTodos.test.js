import { getTodos } from "../../helpers/getTodos";

describe('Test in getTodos', () => {
    
    test('should return 6 Todos', async () => {
        const todos = await getTodos('GET');
        
        expect( todos.length ).toBe(6);
    });

    test('should return objects with a specific stucture', async () => {
        const exampleObj = {
            id: '1',
            description: 'File 2020 Taxes',
            isComplete: true,
            dueDate: '2020-03-10T17:50:44.673Z'
        }

        const todos = await getTodos('GET');
        
        expect( todos[0] ).toEqual( exampleObj );
    });
    
})