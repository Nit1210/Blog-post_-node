// const single=['a','b','c'];

// console.log(single);

// const Os=require('os');

// module.exports={ single,Os};

const express=require('express');
const morgan=require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const { default: mongoose } = require('mongoose');
const Blogposts=require('./routes/Blogroutes')
const app=express();


//connect to database
const dburl="mongodb+srv://niteshkalyan123:urGexLyH8vZXsZpT@mongocluster.832eajc.mongodb.net/blogproject?retryWrites=true&w=majority"
const connect=mongoose.connect(dburl)
.then((result)=>{
    app.listen(3000);
    console.log("server started");
}).catch(err=>{
    console.log(err)
})


app.set('view engine', 'ejs');
//  app.set('views',__dirname);

app.use(morgan('dev'));
// middle ware && static files
app.use(express.static('public'));
// Use the favicon middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.urlencoded({extended:true}));
app.use((req,res,next)=>{
    console.log(req.url);
    console.log(req.hostname);
    next();
})


app.get('/create',(req,res)=>{
    res.render('create',{title: 'create'});
    res.end();
})


app.use(Blogposts)


app.use((req,res)=>{
    res.status(404).render('404');
});
