import React from 'react'
import { shallow } from 'enzyme';
import CircularProgress from '@material-ui/core/CircularProgress';
import Spinner from './spinner';

describe('Spinner component', () => {
  it('should render a CircularProgress', () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper.find(CircularProgress)).toHaveLength(1);
  });
});