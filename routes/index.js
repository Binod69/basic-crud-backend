const router = require('express').Router();

//ROUTES IMPORT
const homeRoutes = require('./home.routes');
const productRoutes = require('./product.routes');

router.use('/', homeRoutes);
router.use('/products', productRoutes);

module.exports = router;
