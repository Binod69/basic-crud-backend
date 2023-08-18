require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.config');
const Product = require('./models/product.models');

//CONNECT TO DATABASE
connectDB();

const app = express();
app.use(express.json());
//ROUTES START
app.get('/', (req, res) => {
  res.send('Hello from home page');
});

// app.get('/product', (req, res) => {
//   res.send('all products');
// });

app.post('/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
app.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
//ROUTES END

//SERVER
const PORT = process.env.PORT || 3001;
app.listen(PORT, (err) => {
  if (err) {
    console.log('error listening to port:' + PORT);
  } else {
    console.log('Server connected to port:' + PORT);
  }
});
