const Product = require('../../models/product.models');

//CREATE A NEW PRODUCTS
const postProducts = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

//GET ALL PRODUCTS
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

//GET PRODUCTS BY ID
const getProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

//UPDATE OR EDIT PRODUCTS
const updateProducts = async (req, res) => {
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
};

//DELETE PRODUCTS
const deleteProducts = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.findByIdAndDelete(id);
    if (!products) {
      return res
        .status(404)
        .json({ message: `cannot delete any product : ${id}` });
    }
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postProducts,
  getProducts,
  getProductsById,
  updateProducts,
  deleteProducts,
};
