import React from 'react'
import { shallow, mount } from 'enzyme';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AddToCartButton from './add-to-cart-button'

describe('AddToCartButton component', () => {
  it('should render correctly component if quantity > 0', () => {
    const props = {
      quantity: 5,
      handleClick: jest.fn()
    };
    const wrapper = mount(<AddToCartButton {...props} />);

    expect(wrapper.prop('quantity')).toEqual(5);
    expect(wrapper.find(ShoppingCartOutlinedIcon)).toHaveLength(1);
  });

  it('should render correctly component if quantity = 0', () => {
    const props = {
      quantity: 0,
      handleClick: jest.fn()
    };
    const wrapper = shallow(<AddToCartButton {...props} />);

    expect(wrapper.find('span').text()).toEqual('Out of stock');
  });

  it('should render component with handleClick func', () => {
    const props = {
      quantity: 2,
      handleClick: jest.fn()
    };
    const wrapper = shallow(<AddToCartButton {...props} />);

    wrapper.simulate('click');
    expect(props.handleClick).toBeCalled();
  });
});