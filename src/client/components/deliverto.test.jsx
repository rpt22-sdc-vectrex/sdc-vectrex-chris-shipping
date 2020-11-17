import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import { findByTestAttr } from '../../../test/utils';
import DeliverTo from './DeliverTo';

configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<DeliverTo {...props} />);
  return component;
};

describe('Testing DeliverTo Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test('Should render DeliverTo component without errors', () => {
    const wrapper = findByTestAttr(component, 'deliverComponent');
    expect(wrapper.length).toBe(1);
  });
});
