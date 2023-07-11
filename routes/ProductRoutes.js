const express = require('express');
const { createProduct, fetchAllProducts, fetchProductById, updateProduct } = require('../controllers/ProductCtrl');
const {isAuthenticatedUser, authorizeRoles} = require('../middlewares/Auth')

const router = express.Router();
//  /products is already added in base path
router.post('/createProduct', createProduct ,isAuthenticatedUser,authorizeRoles)
      .get('/', fetchAllProducts,isAuthenticatedUser,authorizeRoles)
      .get('/:id', fetchProductById,isAuthenticatedUser,authorizeRoles)
      .patch('/:id', updateProduct,authorizeRoles,isAuthenticatedUser)
      // .get('/update/test',async(req,res)=>{
      //       // For adding discountPrice to existing data : delete this code after use
      //      const products = await Product.find({});
      //      for(let product of products){
      //       product.discountPrice = Math.round(product.price*(1-product.discountPercentage/100))
      //       await product.save()
      //       console.log(product.title+ ' updated')
      //      }
      //      res.send('ok')
      // })

      

module.exports = router;