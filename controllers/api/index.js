const router = require('express').Router();
const interestRoutes = require('./interestRoutes.js');
// const homeRoutes = require('./homeRoutes');

router.use('/interests', interestRoutes);
// router.use('/', homeRoutes);

module.exports = router;