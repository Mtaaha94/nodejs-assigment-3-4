const express = require('express');
const { addToCart, fetchCartByUser, deleteFromCart, updateCart } = require('../controllers/Cart');
const {isAuthenticatedUser} = require("../middlewares/Auth")

const router = express.Router();
//  /products is already added in base path
router.post('/addtocart', addToCart,isAuthenticatedUser)
      .get('/', fetchCartByUser,isAuthenticatedUser)
      .delete('/:id', deleteFromCart,isAuthenticatedUser)
      .patch('/:id', updateCart,isAuthenticatedUser)


module.exports = router;