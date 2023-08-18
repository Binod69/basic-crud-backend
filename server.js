require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.config');
const Product = require('./models/product.models');

//CONNECT TO DATABASE
connectDB();

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

const routes = require('./routes/index');
//ROUTES START
app.use('/api/v1', routes);

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
