import React from 'react';
import { shallow } from 'enzyme';
import LoginSuccess from './LoginSuccess';

describe('<LoginSuccess/>', () => {
  const wrapper = shallow(<LoginSuccess/>);

  it('renders without crashing', () => {
    shallow(<LoginSuccess/>);
  });

  it('has image', () => {
    expect(wrapper.find('img')).toHaveLength(1)
  });

  it('has feedback', () => {
    expect(wrapper.contains('Logged Successful')).toBe(true)
  });
})
