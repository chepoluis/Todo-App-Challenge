import { shallow } from "enzyme";
import { TodoGridItem } from "../../components/TodoGridItem";

describe('Test in <TodoGridItem /> component', () => {
    
    test('should show the component', () => {
        const wrapper = shallow( <TodoGridItem />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('should have btn-outline-primary class in the button if the todo is not completed', () => {
        const props = {
            description: 'test',
            dueDate: '2020-06-26T19:00:00.000Z',
            isComplete: false,
            id: '1'
        }
        
        const wrapper = shallow( <TodoGridItem {...props} />);
        const button = wrapper.find('button');
        const className = button.prop('className'); 

        expect( className.includes('btn-outline-primary') ).toBe( true );
    })
    
    test('should have btn-outline-danger class in the button if the todo is completed', () => {
        const props = {
            description: 'test',
            dueDate: '2020-06-26T19:00:00.000Z',
            isComplete: true,
            id: '1'
        }

        const wrapper = shallow( <TodoGridItem {...props} />);
        const button = wrapper.find('button');
        const className = button.prop('className'); 

        expect( className.includes('btn-outline-danger') ).toBe( true );
    })

    test('should show Completed in the span if the Todo is completed', () => {
        const props = {
            description: 'test',
            dueDate: '2020-06-26T19:00:00.000Z',
            isComplete: true,
            id: '1'
        }

        const wrapper = shallow( <TodoGridItem {...props} />);
        const span = wrapper.find('.card-header');
        const text = span.prop('children');

        expect( text ).toBe( 'Completed' );
    })

    test('should show Not completed in the span if the Todo is not completed', () => {
        const props = {
            description: 'test',
            dueDate: '2020-06-26T19:00:00.000Z',
            isComplete: false,
            id: '1'
        }

        const wrapper = shallow( <TodoGridItem {...props} />);
        const span = wrapper.find('.card-header');
        const text = span.prop('children');

        expect( text ).toBe( 'Not completed' );
    })
})