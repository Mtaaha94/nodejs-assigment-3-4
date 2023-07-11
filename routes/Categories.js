const express = require('express');
const { fetchCategories, createCategory } = require('../controllers/Category');
const {isAuthenticatedUser, authorizeRoles} = require('../middlewares/Auth')

const router = express.Router();
//  /categories is already added in base path
router.get('/', fetchCategories, isAuthenticatedUser).post('/createCategory',createCategory, isAuthenticatedUser, authorizeRoles)

module.exports = router;