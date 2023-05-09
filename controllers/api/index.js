const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const interestRoutes = require('./interestRoutes.js');
// const biographyRoutes = require('./bioRoutes.js');
// const homeRoutes = require('./homeRoutes');

router.use('/users', userRoutes);
// router.use('/biography', biographyRoutes);
router.use('/interests', interestRoutes);
// router.use('/', homeRoutes);

module.exports = router;