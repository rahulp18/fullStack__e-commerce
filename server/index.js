const bodyparser = require('body-parser');
const express = require('express');
const { ConnectDB } = require('./Database/Connect');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const paymentRoutes = require('./routes/stripe');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
const PORT = 5000;
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
ConnectDB();
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', paymentRoutes);
app.listen(PORT, () =>
  console.log(
    `Server is listing on port number ${PORT} secret key ${process.env.STRIPE_KEY} `
  )
);
