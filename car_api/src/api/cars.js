const express = require('express');
const monk = require('monk');
const Joi = require('@hapi/joi');

const db = monk(process.env.MONGO_URI);
const cars = db.get('cars');
const schema = Joi.object({
  company: Joi.string().trim().required(),
  model: Joi.string().trim().required(),
  color: Joi.string().trim().required(),
  year: Joi.number().integer().min(1900).max(3000)
    .required(),
  cost: Joi.number().required(),
  miles: Joi.number()
});

const router = express.Router();

// read all
router.get('/', async (req, res, next) => {
  try {
    const items = await cars.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// read one
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await cars.findOne({
      _id: id,
    });
    if (!item) return next();
    return res.json(item);
  } catch (error) {
    next(error);
  }
});

// create one
router.post('/', async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    const inserted = await cars.insert(value);
    res.json(inserted);
  } catch (error) {
    next(error);
  }
});

// update one
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const value = await schema.validateAsync(req.body);
    const item = await cars.findOne({
      _id: id,
    });
    if (!item) return next();
    await cars.update({
      _id: id,
    }, {
      $set:
        value,

    });
    res.json(value);
  } catch (error) {
    next(error);
  }
});

// deleate one

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await cars.remove({
      _id: id,
    });
    res.status(200).send('Deleted sucuessfuly');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
