const mongoose = require('mongoose');

const ConnectDB = async () => {
  try {
    console.log('Connected with Database');
    return mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

module.exports = { ConnectDB };
