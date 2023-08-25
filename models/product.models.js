const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, 'Please enter a product name'],
    },
    quantity: {
      type: String,
      require: true,
      default: 0,
    },
    price: {
      type: Number,
      require: [true, 'Please enter a price of the product'],
    },
    image: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
