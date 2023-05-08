const router = require('express').Router();
const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
//commented out because it needs handlebars to work
// router.use('/', homeRoutes);

module.exports = router;
