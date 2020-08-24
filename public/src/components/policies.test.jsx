import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { findByTestAttr } from '../../../test/utils';
import Policies from './Policies';

configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<Policies {...props} />)
  return component;
};

describe('Testing the Policies Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test('Should render Policies component without errors', () => {
    const wrapper = findByTestAttr(component, 'policiesComponent');
    expect(wrapper.length).toBe(1);
  });
});
