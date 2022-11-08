const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({include:[Product]})
    res.status(200).json(categories)
  } catch (err) {
    console.log(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      include: [Product]
    })

    if (!oneCategory) {
      res.status(400).json({message: 'No category found by that ID.'})
    }
    res.status(200).json(oneCategory)
  } catch (err) {
    console.log(err)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
      const category = await Category.create(req.body)
      res.status(200).json(category)
  } catch (err) {
      console.log(err)
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      },
    }
  ).then((updatedCategory) => {
    if(updatedCategory[0] === 0) {
      return res.status(400).json({message: 'No category found by that ID.'})
    }
    res.join(updatedCategory)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({err: err});
  })
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
     const category = await Category.destroy({
          where: {
              id: req.params.id
          }
      })

      if (!category) {
          return res.status(400).json({message: 'No category found by that id'})
      }
      res.status(200).json(category)
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
