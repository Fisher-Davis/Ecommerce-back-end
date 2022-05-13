const router = require('express').Router();
const { Category, Product } = require('../../models');
const { create } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include: [Product]})
  .then((categories) => res.json(categories))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });

  });

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({where: {id:req.params.id}, include: [Product]})
  .then((category) => res.json(category))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((category) => res.status(200).json(category))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({where: {id:req.params.id}})
  .then((category) => res.status(200).json(category))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where: {id:req.params.id}})
  .then((category) => res.status(200).json(category))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

module.exports = router;
