import React from 'react'
import { shallow } from 'enzyme';
import IncreaseBlock from './increase-block'

describe('Forbidden component', () => {
  it('should render correctly component', () => {
    const wrapper = shallow(<IncreaseBlock />);

    expect(wrapper.find('RemoveIcon')).toHaveLength(1);
    expect(wrapper.find('AddIcon')).toHaveLength(1);
  });
});