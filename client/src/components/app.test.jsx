import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { findByTestAttr } from '../../../Test/utils';
import App from './App';

configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
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

describe('Testing App Methods', () => {
  const data = {
    "countries_shipped_to": "United States",
    "estimated_delivery": "2020-02-23T06:55:31Z",
    "is_free_shipping": false,
    "product_id": 55,
    "ready_to_ship": "nunc nisl duis",
    "return_policy": "donec posuere metus vitae ipsum aliquam non",
    "returns": "Accepted",
    "ship_from_city": "Yakima",
    "ship_from_state": "WA",
    "shipping_cost": "3.97",
    "__v": 0,
    "_id": "5f61ac389f0c151f3805a02e",
  };

  test('setProductId', () => {
    let testApp = new App;
    let result = testApp.setProductId();
    //in package.json "testURL": "http://myetsytest.com/5",
    expect(result).toBe(5);
  });

  test('setProductLocation', () => {
    let testApp = new App;
    let result = testApp.setProductLocation();
    expect(result).toBe('http://myetsytest.com');
  });

  test('getShippingCost', () => {
    let testApp = new App;
    let result = testApp.getShippingCost(data);
    expect(result).toBe('$3.97');
  })

});