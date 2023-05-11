const router = require('express').Router();
const { Interest, User } = require('../../models');

// 
// const sequelize = require('sequelize');
// 
router.get('/', async (req, res) => {
  try {
    const interestData = await Interest.findAll({ include: { all: true, nested: true } })
    res.status(200).json(interestData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const interestData = await Interest.create(req.body);

    res.status(200).json(interestData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const interestData = await Interest.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!interestData) {
      res.status(404).json({ message: 'error' });
      return;
    }

    res.status(200).json(interestData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router