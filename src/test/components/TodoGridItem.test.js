import { shallow } from "enzyme";
import { TodoGridItem } from "../../components/TodoGridItem";

describe('Test in <TodoGridItem /> component', () => {
    
    test('should show the component', () => {
        const wrapper = shallow( <TodoGridItem />);
        expect( wrapper ).toMatchSnapshot();
    });
    
    // test('should complete/incomplete the Todo', () => {
    //     const wrapper = shallow( <TodoGridItem />);
    //     const i = wrapper.find('i');
        
    //     console.log(wrapper.find('span').props().children)
    //     i.simulate('click');
    //     console.log(wrapper.find('span').props().children)
        
    //     // console.log(wrapper.find('i').props())
    // });
    
})