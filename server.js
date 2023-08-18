require('dotenv').config();
const express = require('express');
const app = express();

//ROUTES START
app.get('/', (req, res) => {
  res.send('Hello from home page');
});

app.get('/product', (req, res) => {
  res.send('all products');
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
