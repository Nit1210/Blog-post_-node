const express=require('express');
const router=express.Router();  
const Blogcontroller=require('../Controler/Blogcontroller');
//show blogs in home or/blogs
router.get('/',Blogcontroller.showblogs);
//post the blog to db
router.post('/blogs',Blogcontroller.blogpost)
//get a blog by click
router.get('/:id',Blogcontroller.getblog);
//delete a blog
router.delete('/:id',Blogcontroller.deleteblog)
//update
router.post('/blogs/:id',Blogcontroller.update_snippet);

module.exports= router;