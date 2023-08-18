const Product = require('../../models/product.models');
const asyncHandler = require('express-async-handler');

//CREATE A NEW PRODUCTS
const postProducts = asyncHandler(async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//GET ALL PRODUCTS
const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//GET PRODUCTS BY ID
const getProductsById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//UPDATE OR EDIT PRODUCTS
const updateProducts = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findByIdAndUpdate(id, req.body);
    if (!products) {
      return res.status(404);
      throw new Error(`cannot find any product : ${id}`);
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
//DELETE PRODUCTS
const deleteProducts = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.findByIdAndDelete(id);
    if (!products) {
      return res.status(404);
      throw new Error(`cannot find product to delete : ${id}`);
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  postProducts,
  getProducts,
  getProductsById,
  updateProducts,
  deleteProducts,
};
