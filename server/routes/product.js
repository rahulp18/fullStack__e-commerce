const express = require('express');
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  allProducts,
} = require('../controllers/product');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAdmin,
} = require('./verifyToken');

const router = express.Router();

router.post('/', verifyTokenAdmin, createProduct);
router.put('/:id', verifyTokenAdmin, updateProduct);
router.delete('/:id', verifyTokenAdmin, deleteProduct);
router.get('/find/:id', getProduct);
router.get('/', allProducts);

module.exports = router;
