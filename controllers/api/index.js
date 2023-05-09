const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const interestRoutes = require('./interestRoutes.js');

router.use('/users', userRoutes);
router.use('/interests', interestRoutes);

module.exports = router;
