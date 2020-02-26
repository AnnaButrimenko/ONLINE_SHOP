import React from 'react'
import { mount } from 'enzyme';
import PagingDots from './pagingDots'

describe('PagingDots component', () => {
  it('should render correctly component', () => {
    const props = {
      slideCount: 5,
      slidesToScroll: 4,
      slidesToShow: 3,
      cellAlign: 'right',
      currentSlide: 6,
      goToSlide: () => {},
      classItems: 'test',
      ulPagingItem: 'phrase',
    }

    const wrapper = mount(<PagingDots {...props} />);

    expect(wrapper.prop('slideCount')).toEqual(5);
    expect(wrapper.prop('slidesToScroll')).toEqual(4);
    expect(wrapper.prop('slidesToShow')).toEqual(3);
    expect(wrapper.prop('cellAlign')).toEqual('right');
    expect(wrapper.prop('currentSlide')).toEqual(6);
    expect(wrapper.prop('classItems')).toEqual('test');
    expect(wrapper.prop('ulPagingItem')).toEqual('phrase');
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(2);
    expect(wrapper.find('button')).toHaveLength(2);
  });
});