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

  router.post('/', async (req, res) => {
    try {
      const bioData = await Biography.create(req.body);
  
        res.status(200).json(bioData);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });

  router.put ('/', async (req,res) => {
    try {
      const bioData = await Biography.update(req.body);

      res.status(200).json(bioData);
    } catch (err) {
      console.log(err)
      res.status(400).json(err)
    }
  })




  module.exports = router