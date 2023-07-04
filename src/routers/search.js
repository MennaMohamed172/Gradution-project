const express = require ('express')
const searchController= require('../controllers/searchController')
const auth = require('../middleware/auth')
const router = express.Router()
const checkRole = require('../middleware/role')


router.get ('/products' , auth , checkRole("admin"),searchController.getAllProduct)
router.get('/products/:key',auth , checkRole("User"),searchController.getProductByKey)
router.post ('/products',auth ,checkRole("admin") ,searchController.postNewProduct)
router.put('/products/:id',auth , checkRole("admin"), searchController.putFindAndUpdate)
router.delete ('/products/:id',  auth , checkRole("admin"),searchController.deletProductById)


module.exports = router;