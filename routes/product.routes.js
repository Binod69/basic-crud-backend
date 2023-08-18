const router = require('express').Router();
const {
  postProducts,
  getProducts,
} = require('../src/controllers/product.controller');

router.route('/').post(postProducts);

router.route('/').get(getProducts);
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findByIdAndUpdate(id, req.body);
    if (!products) {
      return res
        .status(404)
        .json({ message: `cannot find any product : ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.findByIdAndDelete(id);
    if (!products) {
      return res
        .status(404)
        .json({ message: `cannot find any product : ${id}` });
    }
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
