import React from 'react';
import { shallow } from 'enzyme';
import Field from './Field';

describe('<Field/>', () => {
  const inputWrapper = shallow(<Field type="text"/>);
  const checkboxWrapper = shallow(<Field type="checkbox"/>);

  it('renders email field without crashing', () => {
    shallow(<Field type="email"/>);
  });

  it('renders password field without crashing', () => {
    shallow(<Field type="password"/>);
  });

  it('renders checkbox field without crashing', () => {
    shallow(<Field type="checkbox"/>);
  });

  it('show error in input wrapper if invalid', () => {
    inputWrapper.setProps({ valid: false })
    expect(inputWrapper.find('p.error')).toHaveLength(1)
  });

  it('show error in checkbox wrapper if invalid', () => {
    checkboxWrapper.setProps({ valid: false })
    expect(checkboxWrapper.find('p.error')).toHaveLength(1)
  });
})
