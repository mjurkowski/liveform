import React from 'react';
import { shallow, mount } from 'enzyme';
import LoginForm from './LoginForm';
import Field from './Field/Field';


describe('<LoginForm/>', () => {
  const wrapper = mount(<LoginForm onSuccess={() => {}}/>);

  it('renders without crashing', () => {
    shallow(<LoginForm onSuccess={() => {}}/>);
  });

  it('has 3 fields', () => {
    expect(wrapper.find(Field)).toHaveLength(3)
  });

  it('has email field', () => {
    expect(wrapper.find('Field[type="email"]')).toHaveLength(1)
  });

  it('has password field', () => {
    expect(wrapper.find('Field[type="password"]')).toHaveLength(1)
  });

  it('has checkbox field', () => {
    expect(wrapper.find('Field[type="checkbox"]')).toHaveLength(1)
  });

  it('has submit button', () => {
    expect(wrapper.find('input[type="submit"]')).toHaveLength(1)
  });

  it('show invalid feedback if no field filled', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {}})
    expect(wrapper.find('p.error')).toHaveLength(2)
  });

  it('show loading after on state', () => {
    wrapper.setState({ isLoading: true })
    expect(wrapper.contains('Loading')).toBe(true)
  });

  it('show feedback if exist', () => {
    wrapper.setState({ feedback: 'test feedback' })
    expect(wrapper.contains('test feedback')).toBe(true)
  });
})
