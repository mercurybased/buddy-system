const router = require('express').Router();
// const postRoutes = require('./postRoutes');
// const commentRoutes = require('./commentRoutes');

// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);


module.exports = router;
const userRoutes = require('./userRoutes.js');
const interestRoutes = require('./interestRoutes.js');
const biographyRoutes = require('./bioRoutes.js');
// const homeRoutes = require('./homeRoutes');

router.use('/users', userRoutes);
router.use('/users', userRoutes);
router.use('/biography', biographyRoutes);
router.use('/interests', interestRoutes);
// router.use('/', homeRoutes);

module.exports = router;
