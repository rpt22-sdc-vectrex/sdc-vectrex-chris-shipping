//requirements
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require ('path');
const Product = require(path.join(__dirname, '../models/Shipping')); //schema for this collection

//List of items to add to my dev and test databases - product_id 1-100 match product ids from other team member's dbs. The fake data may not match.
const products = [
  new Product({
    "product_id": 1,
    "estimated_delivery": "2020-03-27T00:42:30Z",
    "ready_to_ship": "1-3 business days",
    "ship_from_city": "Seattle",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "No returns or exchanges. But please contact me if you have any problems with your order."
  }),

  new Product({
    "product_id": 2,
    "estimated_delivery": "2019-11-12T01:17:42Z",
    "ready_to_ship": "3-5 business days",
    "ship_from_city": "Henderson",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "Returns and exchanges accepted. Exceptions may apply."
  }),

  new Product({
    "product_id": 3,
    "estimated_delivery": "2020-08-22T22:08:10Z",
    "ready_to_ship": "non interdum in",
    "ship_from_city": "North Las Vegas",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "ante nulla justo aliquam quis"
  }),

  new Product({
    "product_id": 4,
    "estimated_delivery": "2019-12-28T16:46:33Z",
    "ready_to_ship": "aliquam non mauris",
    "ship_from_city": "Tacoma",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "ligula vehicula consequat morbi a ipsum"
  }),

  new Product({
    "product_id": 5,
    "estimated_delivery": "2020-04-09T14:39:06Z",
    "ready_to_ship": "eget elit sodales",
    "ship_from_city": "Everett",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "tincidunt eu felis fusce posuere felis sed"
  }),

  new Product({
    "product_id": 6,
    "estimated_delivery": "2020-01-14T17:47:16Z",
    "ready_to_ship": "at velit eu",
    "ship_from_city": "Lincoln",
    "ship_from_state": "NE",
    "countries_shipped_to": "United States",
    "return_policy": "maecenas pulvinar lobortis est phasellus sit amet"
  }),

  new Product({
    "product_id": 7,
    "estimated_delivery": "2020-09-13T04:29:57Z",
    "ready_to_ship": "in sagittis dui",
    "ship_from_city": "Pueblo",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "potenti in eleifend quam a odio in hac"

  }),

  new Product({
    "product_id": 8,
    "estimated_delivery": "2020-03-17T12:17:26Z",
    "ready_to_ship": "morbi vestibulum velit",
    "ship_from_city": "Omaha",
    "ship_from_state": "NE",
    "countries_shipped_to": "United States",
    "return_policy": "dapibus dolor vel est donec"
  }),

  new Product({
    "product_id": 9,
    "estimated_delivery": "2020-06-26T00:54:24Z",
    "ready_to_ship": "ultrices vel augue",
    "ship_from_city": "Las Vegas",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "proin leo odio porttitor id"
  }),

  new Product({
    "product_id": 10,
    "estimated_delivery": "2020-05-25T05:34:24Z",
    "ready_to_ship": "primis in faucibus",
    "ship_from_city": "Tacoma",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "ipsum ac tellus semper interdum mauris"
  }),

  new Product({
    "product_id": 11,
    "estimated_delivery": "2020-10-24T15:55:10Z",
    "ready_to_ship": "interdum in ante",
    "ship_from_city": "Tacoma",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "adipiscing lorem vitae mattis nibh ligula nec"
  }),

  new Product({
    "product_id": 12,
    "estimated_delivery": "2019-12-21T13:40:03Z",
    "ready_to_ship": "sapien in sapien",
    "ship_from_city": "Henderson",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "at diam nam tristique tortor eu pede"
  }),

  new Product({
    "product_id": 13,
    "estimated_delivery": "2020-01-14T07:45:25Z",
    "ready_to_ship": "orci luctus et",
    "ship_from_city": "Tacoma",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "maecenas pulvinar lobortis est phasellus sit amet"
  }),

  new Product({
    "product_id": 14,
    "estimated_delivery": "2020-06-15T18:43:38Z",
    "ready_to_ship": "nibh ligula nec",
    "ship_from_city": "Las Vegas",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "nulla sed accumsan felis ut at dolor"
  }),

  new Product({
    "product_id": 15,
    "estimated_delivery": "2019-12-21T03:17:51Z",
    "ready_to_ship": "magnis dis parturient",
    "ship_from_city": "Boulder",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "pede lobortis ligula sit amet eleifend"
  }),

  new Product({
    "product_id": 16,
    "estimated_delivery": "2020-09-23T08:18:26Z",
    "ready_to_ship": "pede justo lacinia",
    "ship_from_city": "Lincoln",
    "ship_from_state": "NE",
    "countries_shipped_to": "United States",
    "return_policy": "morbi porttitor lorem id ligula suspendisse ornare"
  }),

  new Product({
    "product_id": 17,
    "estimated_delivery": "2019-12-15T02:23:38Z",
    "ready_to_ship": "morbi vestibulum velit",
    "ship_from_city": "Denver",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "convallis nunc proin at turpis"
  }),

  new Product({
    "product_id": 18,
    "estimated_delivery": "2020-04-21T19:41:55Z",
    "ready_to_ship": "eget semper rutrum",
    "ship_from_city": "Tacoma",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "in consequat ut nulla sed accumsan"
  }),

  new Product({
    "product_id": 19,
    "estimated_delivery": "2019-11-12T18:34:04Z",
    "ready_to_ship": "vestibulum sed magna",
    "ship_from_city": "Las Vegas",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "quis lectus suspendisse potenti in eleifend"
  }),

  new Product({
    "product_id": 20,
    "estimated_delivery": "2019-11-04T08:35:04Z",
    "ready_to_ship": "condimentum neque sapien",
    "ship_from_city": "Spokane",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "nibh fusce lacus purus aliquet at"
  }),

  new Product({
    "product_id": 21,
    "estimated_delivery": "2020-01-13T15:05:11Z",
    "ready_to_ship": "ut ultrices vel",
    "ship_from_city": "Boulder",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "morbi ut odio cras mi"

  }),

  new Product({
    "product_id": 22,
    "estimated_delivery": "2020-10-23T23:13:44Z",
    "ready_to_ship": "convallis morbi odio",
    "ship_from_city": "Colorado Springs",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "justo aliquam quis turpis eget elit sodales scelerisque"
  }),

  new Product({
    "product_id": 23,
    "estimated_delivery": "2020-08-16T10:48:33Z",
    "ready_to_ship": "in magna bibendum",
    "ship_from_city": "Omaha",
    "ship_from_state": "NE",
    "countries_shipped_to": "United States",
    "return_policy": "amet erat nulla tempus vivamus in felis"
  }),

  new Product({
    "product_id": 24,
    "estimated_delivery": "2019-10-02T04:28:08Z",
    "ready_to_ship": "suscipit nulla elit",
    "ship_from_city": "Henderson",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "massa volutpat convallis morbi odio odio elementum eu"

  }),

  new Product({
    "product_id": 25,
    "estimated_delivery": "2020-04-14T12:51:54Z",
    "ready_to_ship": "mi integer ac",
    "ship_from_city": "Colorado Springs",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "accumsan odio curabitur convallis duis consequat dui nec"
  }),

  new Product({
    "product_id": 26,
    "estimated_delivery": "2020-04-20T13:40:06Z",
    "ready_to_ship": "molestie hendrerit at",
    "ship_from_city": "Colorado Springs",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "donec pharetra magna vestibulum aliquet ultrices erat"

  }),

  new Product({
    "product_id": 27,
    "estimated_delivery": "2019-09-28T09:00:53Z",
    "ready_to_ship": "suspendisse potenti cras",
    "ship_from_city": "Reno",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "nam ultrices libero non mattis pulvinar nulla"
  }),

  new Product({
    "product_id": 28,
    "estimated_delivery": "2019-10-11T05:13:31Z",
    "ready_to_ship": "nulla tempus vivamus",
    "ship_from_city": "Seattle",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "mollis molestie lorem quisque ut erat curabitur"
  }),

  new Product({
    "product_id": 29,
    "estimated_delivery": "2019-09-26T02:53:48Z",
    "ready_to_ship": "justo eu massa",
    "ship_from_city": "Omaha",
    "ship_from_state": "NE",
    "countries_shipped_to": "United States",
    "return_policy": "enim blandit mi in porttitor pede"
  }),

  new Product({

    "product_id": 30,
    "estimated_delivery": "2019-11-21T03:58:45Z",
    "ready_to_ship": "dolor sit amet",
    "ship_from_city": "Colorado Springs",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "nullam sit amet turpis elementum ligula vehicula"
  }),

  new Product({
    "product_id": 31,
    "estimated_delivery": "2019-11-05T10:23:07Z",
    "ready_to_ship": "dis parturient montes",
    "ship_from_city": "Las Vegas",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "lacus morbi sem mauris laoreet"
  }),

  new Product({
    "product_id": 32,
    "estimated_delivery": "2020-10-09T20:21:40Z",
    "ready_to_ship": "at turpis a",
    "ship_from_city": "Seattle",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "justo in blandit ultrices enim lorem ipsum dolor"
  }),

  new Product({
    "product_id": 33,
    "estimated_delivery": "2020-10-27T02:41:39Z",
    "ready_to_ship": "nunc commodo placerat",
    "ship_from_city": "Seattle",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "tristique est et tempus semper est quam"
  }),

  new Product({
    "product_id": 34,
    "estimated_delivery": "2020-05-28T15:01:32Z",
    "ready_to_ship": "ipsum primis in",
    "ship_from_city": "Boulder",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "porttitor lorem id ligula suspendisse ornare consequat"
  }),

  new Product({
    "product_id": 35,
    "estimated_delivery": "2020-06-19T19:41:52Z",
    "ready_to_ship": "suscipit nulla elit",
    "ship_from_city": "Lakewood",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "nulla eget eros elementum pellentesque quisque"
  }),

  new Product({
    "product_id": 36,
    "estimated_delivery": "2020-09-06T12:17:14Z",
    "ready_to_ship": "ut erat curabitur",
    "ship_from_city": "Spokane",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "amet nunc viverra dapibus nulla"
  }),

  new Product({
    "product_id": 37,
    "estimated_delivery": "2020-01-28T03:33:30Z",
    "ready_to_ship": "consequat morbi a",
    "ship_from_city": "Seattle",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "dolor sit amet consectetuer adipiscing"
  }),

  new Product({
    "product_id": 38,
    "estimated_delivery": "2020-06-15T12:37:09Z",
    "ready_to_ship": "eros vestibulum ac",
    "ship_from_city": "Seattle",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "est quam pharetra magna ac"
  }),

  new Product({
    "product_id": 39,
    "estimated_delivery": "2019-11-15T14:44:50Z",
    "ready_to_ship": "nec dui luctus",
    "ship_from_city": "Seattle",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "rutrum neque aenean auctor gravida sem praesent id"
  }),

  new Product({
    "product_id": 40,
    "estimated_delivery": "2020-04-23T17:45:47Z",
    "ready_to_ship": "est phasellus sit",
    "ship_from_city": "Sparks",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "posuere felis sed lacus morbi sem mauris"
  }),

  new Product({
    "product_id": 41,
    "estimated_delivery": "2019-11-07T08:16:44Z",
    "ready_to_ship": "ac nulla sed",
    "ship_from_city": "Lincoln",
    "ship_from_state": "NE",
    "countries_shipped_to": "United States",
    "return_policy": "venenatis tristique fusce congue diam"
  }),

  new Product({
    "product_id": 42,
    "estimated_delivery": "2019-11-13T15:31:34Z",
    "ready_to_ship": "laoreet ut rhoncus",
    "ship_from_city": "Denver",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "sem fusce consequat nulla nisl nunc"
  }),

  new Product({
    "product_id": 43,
    "estimated_delivery": "2020-02-10T21:56:17Z",
    "ready_to_ship": "mauris viverra diam",
    "ship_from_city": "Tacoma",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "scelerisque mauris sit amet eros suspendisse"
  }),

  new Product({
    "product_id": 44,
    "estimated_delivery": "2020-08-18T22:59:54Z",
    "ready_to_ship": "convallis nunc proin",
    "ship_from_city": "Las Vegas",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "at feugiat non pretium quis lectus suspendisse potenti"
  }),

  new Product({
    "product_id": 45,
    "estimated_delivery": "2019-10-02T05:59:18Z",
    "ready_to_ship": "justo maecenas rhoncus",
    "ship_from_city": "Portland",
    "ship_from_state": "ME",
    "countries_shipped_to": "United States",
    "return_policy": "quam sollicitudin vitae consectetuer eget rutrum at lorem"
  }),

  new Product({
    "product_id": 46,
    "estimated_delivery": "2020-10-12T02:34:25Z",
    "ready_to_ship": "est lacinia nisi",
    "ship_from_city": "Las Vegas",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "cursus id turpis integer aliquet massa id"
  }),

  new Product({
    "product_id": 47,
    "estimated_delivery": "2020-02-09T19:29:21Z",
    "ready_to_ship": "primis in faucibus",
    "ship_from_city": "Las Vegas",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "lacus morbi sem mauris laoreet ut"
  }),

  new Product({
    "product_id": 48,
    "estimated_delivery": "2019-10-27T10:00:03Z",
    "ready_to_ship": "leo odio condimentum",
    "ship_from_city": "Omaha",
    "ship_from_state": "NE",
    "countries_shipped_to": "United States",
    "return_policy": "vestibulum sit amet cursus id"
  }),

  new Product({
    "product_id": 49,
    "estimated_delivery": "2020-04-29T17:05:31Z",
    "ready_to_ship": "vel accumsan tellus",
    "ship_from_city": "Aurora",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "nec sem duis aliquam convallis"
  }),

  new Product({
    "product_id": 50,
    "estimated_delivery": "2020-01-24T00:03:56Z",
    "ready_to_ship": "dolor sit amet",
    "ship_from_city": "Colorado Springs",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "in lacus curabitur at ipsum ac tellus semper"
  }),

  new Product({
    "product_id": 51,
    "estimated_delivery": "2019-11-27T02:13:12Z",
    "ready_to_ship": "curae nulla dapibus",
    "ship_from_city": "Omaha",
    "ship_from_state": "NE",
    "countries_shipped_to": "United States",
    "return_policy": "quis orci nullam molestie nibh"
  }),

  new Product({
    "product_id": 52,
    "estimated_delivery": "2020-07-22T19:50:26Z",
    "ready_to_ship": "hac habitasse platea",
    "ship_from_city": "Spokane",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "leo odio condimentum id luctus nec"
  }),

  new Product({
    "product_id": 53,
    "estimated_delivery": "2020-03-24T18:29:26Z",
    "ready_to_ship": "sapien in sapien",
    "ship_from_city": "Seattle",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "pretium iaculis diam erat fermentum justo nec condimentum"
  }),

  new Product({
    "product_id": 54,
    "estimated_delivery": "2020-08-03T03:20:31Z",
    "ready_to_ship": "a pede posuere",
    "ship_from_city": "Colorado Springs",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "sapien cum sociis natoque penatibus et magnis dis"
  }),

  new Product({
    "product_id": 55,
    "estimated_delivery": "2020-02-23T06:55:31Z",
    "ready_to_ship": "nunc nisl duis",
    "ship_from_city": "Yakima",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "donec posuere metus vitae ipsum aliquam non"
  }),

  new Product({
    "product_id": 56,
    "estimated_delivery": "2020-06-16T20:57:26Z",
    "ready_to_ship": "consequat in consequat",
    "ship_from_city": "Littleton",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "donec ut dolor morbi vel lectus in"
  }),

  new Product({
    "product_id": 57,
    "estimated_delivery": "2019-10-05T20:45:50Z",
    "ready_to_ship": "nisi venenatis tristique",
    "ship_from_city": "Tacoma",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "penatibus et magnis dis parturient"
  }),

  new Product({
    "product_id": 58,
    "estimated_delivery": "2020-04-29T11:44:41Z",
    "ready_to_ship": "sapien dignissim vestibulum",
    "ship_from_city": "Denver",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "nunc vestibulum ante ipsum primis"
  }),

  new Product({
    "product_id": 59,
    "estimated_delivery": "2020-02-01T22:54:14Z",
    "ready_to_ship": "dolor morbi vel",
    "ship_from_city": "Yakima",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "montes nascetur ridiculus mus etiam vel augue"
  }),

  new Product({
    "product_id": 60,
    "estimated_delivery": "2020-01-24T03:55:14Z",
    "ready_to_ship": "vestibulum quam sapien",
    "ship_from_city": "Boulder",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "sed accumsan felis ut at dolor"
  }),

  new Product({
    "product_id": 61,
    "estimated_delivery": "2020-04-13T06:05:15Z",
    "ready_to_ship": "eu felis fusce",
    "ship_from_city": "Englewood",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "nisl venenatis lacinia aenean sit"
  }),

  new Product({
    "product_id": 62,
    "estimated_delivery": "2020-05-27T08:41:26Z",
    "ready_to_ship": "in faucibus orci",
    "ship_from_city": "Colorado Springs",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "ipsum primis in faucibus orci luctus et"
  }),

  new Product({
    "product_id": 63,
    "estimated_delivery": "2019-10-06T21:29:16Z",
    "ready_to_ship": "duis aliquam convallis",
    "ship_from_city": "Henderson",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "sollicitudin mi sit amet lobortis"
  }),

  new Product({
    "product_id": 64,
    "estimated_delivery": "2020-01-01T20:33:56Z",
    "ready_to_ship": "amet turpis elementum",
    "ship_from_city": "Spokane",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "fermentum justo nec condimentum neque sapien placerat"
  }),

  new Product({
    "product_id": 65,
    "estimated_delivery": "2020-01-18T13:01:45Z",
    "ready_to_ship": "non quam nec",
    "ship_from_city": "North Las Vegas",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "rutrum ac lobortis vel dapibus at diam nam"
  }),

  new Product({
    "product_id": 66,
    "estimated_delivery": "2019-10-07T05:44:24Z",
    "ready_to_ship": "posuere metus vitae",
    "ship_from_city": "Seattle",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "sit amet cursus id turpis integer aliquet massa"
  }),

  new Product({
    "product_id": 67,
    "estimated_delivery": "2020-01-09T05:39:13Z",
    "ready_to_ship": "dolor sit amet",
    "ship_from_city": "Grand Junction",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "aliquam non mauris morbi non"
  }),

  new Product({
    "product_id": 68,
    "estimated_delivery": "2020-01-05T02:45:14Z",
    "ready_to_ship": "justo aliquam quis",
    "ship_from_city": "Fort Collins",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "duis ac nibh fusce lacus"
  }),

  new Product({
    "product_id": 69,
    "estimated_delivery": "2020-05-21T06:29:19Z",
    "ready_to_ship": "eget semper rutrum",
    "ship_from_city": "Greeley",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "lorem quisque ut erat curabitur gravida"
  }),

  new Product({
    "product_id": 70,
    "estimated_delivery": "2020-08-29T19:02:13Z",
    "ready_to_ship": "volutpat convallis morbi",
    "ship_from_city": "Boulder",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "leo odio porttitor id consequat in consequat"
  }),

  new Product({
    "product_id": 71,
    "estimated_delivery": "2020-06-25T03:35:42Z",
    "ready_to_ship": "pede ac diam",
    "ship_from_city": "Denver",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "mauris eget massa tempor convallis"
  }),

  new Product({
    "product_id": 72,
    "estimated_delivery": "2019-12-23T11:06:51Z",
    "ready_to_ship": "faucibus orci luctus",
    "ship_from_city": "Lincoln",
    "ship_from_state": "NE",
    "countries_shipped_to": "United States",
    "return_policy": "tristique est et tempus semper"
  }),

  new Product({
    "product_id": 73,
    "estimated_delivery": "2020-03-16T12:15:14Z",
    "ready_to_ship": "bibendum imperdiet nullam",
    "ship_from_city": "Spokane",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "ultrices posuere cubilia curae nulla dapibus dolor vel"
  }),

  new Product({
    "product_id": 74,
    "estimated_delivery": "2020-03-14T17:49:59Z",
    "ready_to_ship": "proin interdum mauris",
    "ship_from_city": "Carson City",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "sagittis dui vel nisl duis ac nibh fusce"
  }),

  new Product({
    "product_id": 75,
    "estimated_delivery": "2020-07-17T00:09:47Z",
    "ready_to_ship": "massa id lobortis",
    "ship_from_city": "Las Vegas",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "mus etiam vel augue vestibulum rutrum rutrum"
  }),

  new Product({
    "product_id": 76,
    "estimated_delivery": "2020-07-04T12:15:26Z",
    "ready_to_ship": "suspendisse potenti in",
    "ship_from_city": "Everett",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "eleifend luctus ultricies eu nibh quisque"
  }),

  new Product({
    "product_id": 77,
    "estimated_delivery": "2020-10-30T12:07:10Z",
    "ready_to_ship": "felis ut at",
    "ship_from_city": "Colorado Springs",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "odio consequat varius integer ac leo pellentesque"
  }),

  new Product({
    "product_id": 78,
    "estimated_delivery": "2020-03-03T18:14:24Z",
    "ready_to_ship": "varius integer ac",
    "ship_from_city": "Tacoma",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "ante vestibulum ante ipsum primis in faucibus orci"
  }),

  new Product({
    "product_id": 79,
    "estimated_delivery": "2020-07-24T13:05:15Z",
    "ready_to_ship": "in leo maecenas",
    "ship_from_city": "Omaha",
    "ship_from_state": "NE",
    "countries_shipped_to": "United States",
    "return_policy": "ultrices posuere cubilia curae nulla"
  }),

  new Product({
    "product_id": 80,
    "estimated_delivery": "2020-09-07T12:28:56Z",
    "ready_to_ship": "sollicitudin ut suscipit",
    "ship_from_city": "Reno",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "sapien arcu sed augue aliquam"
  }),

  new Product({
    "product_id": 81,
    "estimated_delivery": "2020-05-16T14:48:27Z",
    "ready_to_ship": "luctus cum sociis",
    "ship_from_city": "Omaha",
    "ship_from_state": "NE",
    "countries_shipped_to": "United States",
    "return_policy": "odio in hac habitasse platea"
  }),

  new Product({
    "product_id": 82,
    "estimated_delivery": "2020-06-09T00:46:47Z",
    "ready_to_ship": "non ligula pellentesque",
    "ship_from_city": "Seattle",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "eros viverra eget congue eget semper rutrum nulla"
  }),

  new Product({
    "product_id": 83,
    "estimated_delivery": "2020-02-18T11:51:12Z",
    "ready_to_ship": "auctor sed tristique",
    "ship_from_city": "Aurora",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "pede malesuada in imperdiet et commodo vulputate"
  }),

  new Product({
    "product_id": 84,
    "estimated_delivery": "2020-04-12T13:44:32Z",
    "ready_to_ship": "aliquet massa id",
    "ship_from_city": "Tacoma",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "a feugiat et eros vestibulum ac est lacinia"
  }),

  new Product({
    "product_id": 85,
    "estimated_delivery": "2020-01-15T22:40:18Z",
    "ready_to_ship": "malesuada in imperdiet",
    "ship_from_city": "North Las Vegas",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "vel ipsum praesent blandit lacinia erat vestibulum sed"
  }),

  new Product({
    "product_id": 86,
    "estimated_delivery": "2020-10-17T09:18:53Z",
    "ready_to_ship": "sapien arcu sed",
    "ship_from_city": "Colorado Springs",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "viverra pede ac diam cras pellentesque"
  }),

  new Product({
    "product_id": 87,
    "estimated_delivery": "2019-09-30T11:30:45Z",
    "ready_to_ship": "praesent blandit nam",
    "ship_from_city": "Colorado Springs",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "integer tincidunt ante vel ipsum praesent"
  }),

  new Product({
    "product_id": 88,
    "estimated_delivery": "2019-11-11T14:34:29Z",
    "ready_to_ship": "quis turpis eget",
    "ship_from_city": "Colorado Springs",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "nam dui proin leo odio porttitor id consequat"
  }),

  new Product({
    "product_id": 89,
    "estimated_delivery": "2020-02-26T03:22:19Z",
    "ready_to_ship": "sollicitudin vitae consectetuer",
    "ship_from_city": "Denver",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "lorem quisque ut erat curabitur gravida nisi"
  }),

  new Product({
    "product_id": 90,
    "estimated_delivery": "2020-06-26T21:46:39Z",
    "ready_to_ship": "mattis nibh ligula",
    "ship_from_city": "Littleton",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "ultrices phasellus id sapien in"
  }),

  new Product({
    "product_id": 91,
    "estimated_delivery": "2020-09-07T22:39:59Z",
    "ready_to_ship": "gravida sem praesent",
    "ship_from_city": "Spokane",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "pellentesque viverra pede ac diam cras pellentesque volutpat"
  }),

  new Product({
    "product_id": 92,
    "estimated_delivery": "2019-11-19T03:15:14Z",
    "ready_to_ship": "elementum in hac",
    "ship_from_city": "Kent",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "lorem ipsum dolor sit amet consectetuer adipiscing"
  }),

  new Product({
    "product_id": 93,
    "estimated_delivery": "2020-04-30T02:03:56Z",
    "ready_to_ship": "sodales scelerisque mauris",
    "ship_from_city": "Lincoln",
    "ship_from_state": "NE",
    "countries_shipped_to": "United States",
    "return_policy": "et ultrices posuere cubilia curae mauris viverra diam"
  }),

  new Product({
    "product_id": 94,
    "estimated_delivery": "2020-01-23T03:30:47Z",
    "ready_to_ship": "imperdiet nullam orci",
    "ship_from_city": "Omaha",
    "ship_from_state": "NE",
    "countries_shipped_to": "United States",
    "return_policy": "sapien placerat ante nulla justo aliquam quis"
  }),

  new Product({
    "product_id": 95,
    "estimated_delivery": "2020-08-23T22:39:06Z",
    "ready_to_ship": "magna vestibulum aliquet",
    "ship_from_city": "Omaha",
    "ship_from_state": "NE",
    "countries_shipped_to": "United States",
    "return_policy": "luctus rutrum nulla tellus in"
  }),

  new Product({
    "product_id": 96,
    "estimated_delivery": "2020-09-12T00:02:03Z",
    "ready_to_ship": "vulputate justo in",
    "ship_from_city": "Henderson",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "est quam pharetra magna ac"
  }),

  new Product({
    "product_id": 97,
    "estimated_delivery": "2020-10-29T16:08:52Z",
    "ready_to_ship": "quis augue luctus",
    "ship_from_city": "Seattle",
    "ship_from_state": "WA",
    "countries_shipped_to": "United States",
    "return_policy": "volutpat sapien arcu sed augue aliquam erat volutpat"
  }),

  new Product({
    "product_id": 98,
    "estimated_delivery": "2020-04-11T17:41:49Z",
    "ready_to_ship": "nam congue risus",
    "ship_from_city": "Colorado Springs",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "nibh in lectus pellentesque at nulla suspendisse potenti"
  }),

  new Product({
    "product_id": 99,
    "estimated_delivery": "2019-12-26T01:37:07Z",
    "ready_to_ship": "aenean fermentum donec",
    "ship_from_city": "Denver",
    "ship_from_state": "CO",
    "countries_shipped_to": "United States",
    "return_policy": "primis in faucibus orci luctus et ultrices posuere"
  }),

  new Product({
    "product_id": 100,
    "estimated_delivery": "2019-10-10T02:13:41Z",
    "ready_to_ship": "ante ipsum primis",
    "ship_from_city": "Las Vegas",
    "ship_from_state": "NV",
    "countries_shipped_to": "United States",
    "return_policy": "vestibulum rutrum rutrum neque aenean auctor gravida sem"
  })
];

//Since this seeding script only needs to have a connection open to the db while the script runs create a closeConnection function. The closeConnection function will be called as part of the .save callback to close the connection when all of the records have been sent to the db.
const closeConnection = function () {
  mongoose.disconnect();
  console.log('Disconnected from DB');
};

//main script
//open a connection
dotenv.config({path: path.join(__dirname, '../.env')});
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
  .then(res => console.log('Connected to DB'))
  .catch(err => console.log(err))
// create a counter so we know when the last record has been sent to the db
let exitCounter = 0;
//loop through the 100 products and create a record for each one with it's related shipping data
for (let i = 0; i < products.length; i++) {
  // add each record to the database
  products[i].save((err, result) => {
    //show that records are being added
    console.log(`Adding records..`);
    //increment the exitCounter so we know when to run closeConnection - must increment before checking if we're done yet or will be off by 1
    exitCounter++;
    //check to see if we have finished sending documents to the db, if so close the connection
    if (exitCounter === products.length) {
      closeConnection();
    }
  })
}

//module.exports = seeder; TODO fix this