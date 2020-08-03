const express = require('express');
const cars = require('./cars');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - /cars for cars api'
  });
});

router.use('/cars', cars);
module.exports = router;
