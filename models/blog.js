const { timeStamp } = require('console');
const mongoose= require('mongoose');
const schema=mongoose.Schema;

const BlogSchema= new schema({
  title:
  {type:String,
  required:true
  },
  snippet:
  {
    type:String,
    required:true
  },
  body:{
    type:String,
    required:true
  }
},{timeStamps:true});
const Blog=mongoose.model('blogs',BlogSchema);
module.exports=Blog;