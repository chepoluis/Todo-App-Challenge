import { shallow } from "enzyme";
import { TodoGridItem } from "../../components/TodoGridItem";

describe('Test in <TodoGridItem /> component', () => {
    
    test('should show the component', () => {
        const wrapper = shallow( <TodoGridItem />);
        expect( wrapper ).toMatchSnapshot();
    });
})