const router = require('express').Router();
const { Biography } = require('../../models');

router.get('/', async (req,res) => {
    try {
      const bioData = await Biography.findAll()
      res.status(200).json(bioData)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  });
  module.exports = router