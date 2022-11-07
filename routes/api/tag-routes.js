const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({include: [Product]})
    res.status(200).json(tags)
  } catch(err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {include: [Product]})
    if (!tag) {
      return res.status(400).json({message: 'No tag found by that ID.'})
    }
    res.status(200).json(tag)
  } catch (err) {
    console.log(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create(req.body)
    res.status(200).json(tag)
  } catch (err) {
    console.log(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: 'No tag found by that ID.'});
        return;
      }
      res.join(categoryData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: 'No tag found by that ID.'});
        return;
      }
      res.join(categoryData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
