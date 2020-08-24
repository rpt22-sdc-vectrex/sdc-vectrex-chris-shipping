import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { findByTestAttr } from '../../../test/utils';
import EstimatedDelivery from './EstimatedDelivery';

configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<EstimatedDelivery {...props} />);
  return component;
};

describe('Testing the Estimated Delivery Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test('Should load EstimatedDelivery component without errors', () => {
    const wrapper = findByTestAttr(component, 'deliveryDateComponent');
    expect(wrapper.length).toBe(1);
  });
});
