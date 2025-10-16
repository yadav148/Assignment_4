const express = require('express');
const router = express.Router();
const {getBlog,postBlog,getBlogById,updateBlogById,deleteBlogById} = require('../controllers/users');


router.get('/',getBlog);
router.post('/',postBlog);

router.get('/:id',getBlogById);
router.put('/:id',updateBlogById);
router.delete('/:id',deleteBlogById);

module.exports = router;