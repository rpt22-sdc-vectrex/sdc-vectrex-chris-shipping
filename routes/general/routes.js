const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Whoa Nelly! There\'s a problem here!');
});

router.get('/:productId', (req, res, next) => {
  const options = {
    root: path.join(__dirname, '../../client/'),
  };
  const fileName = 'index.html';
  res.sendFile(fileName, options, (err) => {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

module.exports = router;
