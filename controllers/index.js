const router = require('express').Router();
const apiRoutes = require('./api');
// const frontEndRoutes = require("./frontEndRoutes.js")
// const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
// router.use('/', frontEndRoutes);
//commented out because it needs handlebars to work
// router.use('/', homeRoutes);

module.exports = router;
