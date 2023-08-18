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

// router.route('/:id').put(updateProducts);

// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const products = await Product.findByIdAndDelete(id);
//     if (!products) {
//       return res
//         .status(404)
//         .json({ message: `cannot find any product : ${id}` });
//     }
//     res.status(200).json(products);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
// });

module.exports = router;
