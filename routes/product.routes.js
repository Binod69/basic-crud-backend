const router = require('express').Router();
const {
  postProducts,
  getProducts,
  getProductsById,
  updateProducts,
  deleteProducts,
} = require('../src/controllers/product.controller');

router.route('/').post(postProducts);

router.route('/').get(getProducts);
router
  .route('/:id')
  .get(getProductsById)
  .put(updateProducts)
  .delete(deleteProducts);

module.exports = router;
