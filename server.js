require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
const errorMiddleware = require('./src/middleware/error.middleware');

//CONNECT TO DATABASE
connectDB();

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

//ROUTES START
const routes = require('./routes/index');
app.use('/api/v1', routes);
//ROUTES END

//ERROR MIDDLEWARE
app.use(errorMiddleware);

//SERVER
const PORT = process.env.PORT || 3001;
app.listen(PORT, (err) => {
  if (err) {
    console.log('error listening to port:' + PORT);
  } else {
    console.log('Server connected to port:' + PORT);
  }
});
