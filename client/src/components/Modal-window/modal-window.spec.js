import React from 'react'
import { mount } from 'enzyme';
import ModalWindow from './modal-window'

describe('Forbidden component', () => {
  it('should render correctly component if open = false', () => {
    const props = {
      onModalClose: jest.fn(),
      open: false
    }
    const wrapper = mount(<ModalWindow {...props} />);

    expect(wrapper.prop('open')).toEqual(false);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('ForwardRef(Modal)')).toHaveLength(1);
    expect(wrapper.find('WithStyles(ForwardRef(Paper))')).toHaveLength(0);
  });

  it('should render correctly component if open = true', () => {
    const props = {
      onModalClose: jest.fn(),
      open: true,
      children: 'text'
    }
    const wrapper = mount(<ModalWindow {...props} />);

    expect(wrapper.prop('open')).toEqual(true);
    expect(wrapper.prop('children')).toEqual('text');
    expect(wrapper.find('ForwardRef(Modal)')).toHaveLength(1);
    expect(wrapper.find('WithStyles(ForwardRef(Paper))')).toHaveLength(1);
  });
});