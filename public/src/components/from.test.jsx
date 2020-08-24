import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { findByTestAtrr } from '../../../test/utils';
import From from './From';

configure({ adapter: new Adapter() });

const setUp = (props={}) => {
  const component = shallow(<From {...props} />);
  return component;
};

describe('Testing the From Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test('Should render the From component without errors', () => {
    const wrapper = findByTestAtrr(component, 'fromComponent');
    expect(wrapper.length).toBe(1);
  });
});
