/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-expressions */
import http from 'k6/http';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export const options = {
  vus: 5,
  stages: [
    { duration: '2m', target: 100 },
    { duration: '5m', target: 5000 },
    { duration: '2m', target: 500 },
    { duration: '2m', target: 0 },
  ],
};
// READ - GET
export default () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const url = `http://localhost:7100/product/${getRandomInt(9000000, 10000000)}`;
  const params = {
    headers: {
      Authorization: 'Token ffc62b27db68502eebc6e90b7c1476d29c581f4d',
      'Content-Type': 'application/json',
    },
  };
  check(http.get(url, params), {
    'status is 200': (r) => r.status === 200,
  }) || errorRate.add(1);
};

// UPDATE - PUT
// export default () => {
//   const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
//   const url = `http://localhost:7100/${getRandomInt(9000000, 10000000)}/update`;
//   const payload = JSON.stringify({
//     estimated_delivery: '2020-04-23T17:45:47Z',
//     ready_to_ship: 'Yes',
//     is_free_shipping: true,
//     shipping_cost: '6.66',
//     ship_from_city: 'Ogden',
//     ship_from_state: 'UT',
//     returns: 'Accepted',
//     countries_shipped_to: 'UPDATE MADE!',
//     return_policy: '30 day returns',
//   });
//   const params = {
//     headers: {
//       Authorization: 'Token ffc62b27db68502eebc6e90b7c1476d29c581f4d',
//       'Content-Type': 'application/json',
//     },
//   };
//   check(http.put(url, payload, params), {
//     'status is 200': (r) => r.status === 200,
//   }) || errorRate.add(1);
// };
