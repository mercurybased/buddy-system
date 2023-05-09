const router = require('express').Router();
const { Interest } = require('../../models');

router.get('/', async (req,res) => {
    try {
      const interestData = await Interest.findAll()
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

  module.exports = router