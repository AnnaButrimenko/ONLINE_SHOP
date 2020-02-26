import React from 'react'
import { shallow } from 'enzyme';
import Footer from './footer'
import MainText from './Main-text/main-text'
import FooterNavbar from './Footer-navbar/footer-navbar'
import FooterContactsLink from './Footer-navbar/Footer-links/contacts'
import FooterCompanyLink from './Footer-navbar/Footer-links/company'
import FooterAccountLink from './Footer-navbar/Footer-links/account'

describe('Footer component', () => {
  it('should render correctly component', () => {
    const renderedComponent = shallow(<Footer />);

    expect(renderedComponent.find('MainText')).toHaveLength(1);
    expect(renderedComponent.find('FooterNavbar')).toHaveLength(1);
  });

  it('MainText component', () => {
    const renderedComponent = shallow(<MainText />);

    expect(renderedComponent.contains(<img src="/img/wmf-footer.jpg" alt="WMF" className="makeStyles-img-5" />)).toEqual(true);
    expect(renderedComponent.find('h2')).toHaveLength(1);
    expect(renderedComponent.find('p')).toHaveLength(1);
  })

  it('FooterNavbar component', () => {
    const renderedComponent = shallow(<FooterNavbar />);

    expect(renderedComponent.find('FooterCompanyLink')).toHaveLength(1);
    expect(renderedComponent.find('FooterAccountLink')).toHaveLength(1);
    expect(renderedComponent.find('FooterContactsLink')).toHaveLength(1);
  })

  it('FooterAccountLink component', () => {
    const renderedComponent = shallow(<FooterAccountLink />);

    expect(renderedComponent.find('h2').text()).toEqual('Account');
    expect(renderedComponent.find('Link')).toHaveLength(3);
  })

  it('FooterCompanyLink component', () => {
    const renderedComponent = shallow(<FooterCompanyLink />);

    expect(renderedComponent.find('h2').text()).toEqual('Company');
    expect(renderedComponent.find('Link')).toHaveLength(2);
  })

  it('FooterContactsLink component', () => {
    const renderedComponent = shallow(<FooterContactsLink />);

    expect(renderedComponent.find('h2').text()).toEqual('Contacts');
    expect(renderedComponent.find('Link').text()).toEqual(' Contact list ');
    expect(renderedComponent.find('span')).toHaveLength(6);
  })
});