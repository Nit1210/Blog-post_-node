const Blog=require('../models/blog');

const showblogs=(req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        console.log(result);
        res.render('index',{title:'All Blogs',blogs:result})
    }).catch((err)=>{console.log(err);})
}
const blogpost=(req,res)=>{
    const blog= new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.redirect('/');
    }).catch((err)=>{console.log(err);})
}
 const getblog=(req,res)=>{
    Blog.findById(req.params.id)
    .then((result)=>{
        res.render('details',{blog:result,title:'Blog details'})
    }).catch((err)=>{
        console.log(err);
    });
 }
 const deleteblog=(req,res)=>{
    Blog.findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.json({redirect:'/'})
    }).catch(err=>console.log(err))
 }
 const update_snippet = (req, res) => {
    const id = req.params.id;
    const newSnippet = req.body.snippet;
  
    Blog.findByIdAndUpdate(id, { snippet: newSnippet }, { new: true })
      .then(result => {
        res.redirect(`/${id}`);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while updating the snippet' });
      });
  };



module.exports={
    showblogs, blogpost, getblog,deleteblog,update_snippet
}