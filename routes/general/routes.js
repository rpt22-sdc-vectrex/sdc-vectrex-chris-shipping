const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Whoa Nelly! There\'s a problem here!');
});

module.exports = router;
