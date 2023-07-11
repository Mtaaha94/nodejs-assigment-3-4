const express = require('express');
const { createOrder, fetchOrdersByUser, deleteOrder, updateOrder,fetchAllOrders } = require('../controllers/Order');
const {isAuthenticatedUser,authorizeRoles} = require("../middlewares/Auth")
const router = express.Router();
//  /orders is already added in base path
router.post('/', createOrder,isAuthenticatedUser)
      .get('/own/', fetchOrdersByUser,isAuthenticatedUser)
      .delete('/:id', deleteOrder,authorizeRoles, isAuthenticatedUser)
      .patch('/:id', updateOrder,isAuthenticatedUser)
      .get('/',fetchAllOrders,isAuthenticatedUser)


module.exports = router;