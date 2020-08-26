import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { findByTestAttr } from '../../../test/utils';
import App from './App';

configure({ adapter: new Adapter() });

const setUp = (props={}) => {
  const component = shallow(<App {...props} />);
  return component;
};

describe('Testing the App Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test('Should render the App component without errors', () => {
    const wrapper = findByTestAttr(component, 'appComponent');
    expect(wrapper.length).toBe(1);
  });
});