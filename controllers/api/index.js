const router = require('express').Router();
const userRoutes = require('./userRoutes');
const hoePageRoutes = require('./homePageRoutes');

router.use('/users', userRoutes);
router.use('/homePage', homePageRoutes);

module.exports = router;