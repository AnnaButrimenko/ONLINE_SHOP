import React from 'react'
import { shallow } from 'enzyme';
import AboutUs from './about-us'
import Brands from './Brands/brands'
import About from './About/about'
import Awards from './Awards/awards'
import Video from './Video/video'

describe('AboutUs component', () => {
  it('should render correctly component', () => {
    const wrapper = shallow(<AboutUs />);

    expect(wrapper.find('h2').text()).toEqual('About us');
    expect(wrapper.find('About')).toHaveLength(1);
    expect(wrapper.find('Video')).toHaveLength(1);
    expect(wrapper.find('Brands')).toHaveLength(1);
    expect(wrapper.find('Awards')).toHaveLength(1);
  });

  it('About component', () => {
    const wrapper = shallow(<About />);

    expect(wrapper.find('h3').text()).toEqual('WMF brings pleasure into your life');
    expect(wrapper.find('p')).toHaveLength(2);
  })

  it('Awards component', () => {
    const wrapper = shallow(<Awards />);

    expect(wrapper.find('h3').text()).toEqual('WMF Design – Winner of multiple awards');
    expect(wrapper.contains(<img src="/img/about/awards.jpg" alt="Our rewards" className="makeStyles-img-8" />)).toEqual(true);
    expect(wrapper.find('p')).toHaveLength(1);
  })

  it('Brands component', () => {
    const wrapper = shallow(<Brands />)
    expect(wrapper.find('h3').text()).toEqual('Brands and companies');
    expect(wrapper.find('p')).toHaveLength(2);
  })

  it('Video component', () => {
    const wrapper = shallow(<Video />)
    expect(wrapper.contains(
      <video className="makeStyles-video-9" controls poster="/img/wmf.jpg">
        <source src="/video.mp4" />
        <track kind="captions" />
        Sorry, your browser doesn′t support embedded videos.
      </video>
    )).toEqual(true);
  })
});