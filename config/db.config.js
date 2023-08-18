const mongoose = require('mongoose');

const db = process.env.MONGO_DB_APP_URL;
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(db);
    console.log('Mongo DB connected successfully: ' + connect.connection.host);
  } catch (err) {
    console.log('error connecting to mongo db', err);
  }
};

module.exports = connectDB;
