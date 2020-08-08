const express = require('express');
const port = process.env.PORT || 7100;

const app = express();

app.get('/', (req, res) => {
  res.send('This is a test response message');
})

app.listen(port, () => {
  console.log(`Shipping server is up and running on port ${port}`);
})
