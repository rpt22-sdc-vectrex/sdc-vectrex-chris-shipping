import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { findByTestAttr } from '../../../test/utils';
import ReadyToShip from './ReadyToShip';

configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<ReadyToShip {...props} />);
  return component;
};

describe('Testing the ReadyToShip Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test('Should render ReadyToShip component without errors', () => {
    const wrapper = findByTestAttr(component, 'readyComponent');
    expect(wrapper.length).toBe(1);
  });
});
