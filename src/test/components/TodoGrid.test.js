import { shallow } from "enzyme";
import { TodoGrid } from "../../components/TodoGrid";

describe('Test in <TodoGrid /> component', () => {
    
    test('should show the component', () => {
        const wrapper = shallow( <TodoGrid />);
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should show Loading... if there is no data yet', () => {
        const wrapper = shallow( <TodoGrid />);
        const message = 'Loading...';

        expect( wrapper.find('.alert').props().children ).toBe( message );
    });
})