import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { findByTestAttr } from '../../../test/utils';
import CostToShip from './CostToShip';

configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<CostToShip {...props} />);
  return component;
};

describe('Testing the CostToShip Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test('Should render the CostToShip component without errors', () => {
    const wrapper = findByTestAttr(component, 'costComponent');
    expect(wrapper.length).toBe(1);
  });
});
