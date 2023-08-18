const router = require('express').Router();

router.get('/', (req, res) => {
  throw new Error('fake error');
  // res.send('Api is running');
});

module.exports = router;
