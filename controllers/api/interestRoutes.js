const router = require('express').Router();
const { Interest } = require('../../models');
// 
const sequelize = require('sequelize');
const Op=Sequelize.Op;

// 
router.get('/', async (req,res) => {
    try {
      const interestData = await Interest.findAll({ include:  { all: true, nested: true } })
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




// // interest search
// // search by interest
// router.get('/search',  (req, res) => {
//   let {term}req.query;
//   term=term.toLowerCase();
// user.findAll({where:{interest:{[Op.like]:`%${term}%`}}})
// .then (user=res.render("search view to be added"{pass in intreswt/user}))
// .catch  (err=>console.log(err));
// // mayebe replace user with interest 
// // maybe replace term line with "%" + term + "%"

// });