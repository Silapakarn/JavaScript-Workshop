const express = require('express');
const postControllers = require('../controllers/post')
const validator = require('../validator/index')

const router = express.Router()



router.get('/', postControllers.getPosts)
router.post('/post', validator.createPostValidator  ,postControllers.createPost)



module.exports = router ;
