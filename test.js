// setInterval(()=>{
//     console.log(__dirname);
//     console.log(__filename);
// },1000);

// const hi=require('./main.js');
// console.log(hi.Os.machine());
// const fs=require('fs');

// //read
// fs.readFile('./plain.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString())
//     }
// })

// //write

// fs.writeFile('./plain.txt', "something is written", (err)=>{
//     console.log(err);
// })

// console.log(!fs.existsSync('./plain.txt'));

//stream
// const fs=require('fs');

// const readStream=fs.createReadStream('./plain.txt','utf-8');
// const writeStream=fs.createWriteStream('./plain_copy.txt');
// // readStream.on('data',(bucket)=>{
// //   console.log(bucket);
// //   console.log("new bucket");
// //   writeStream.write(bucket);
// // });
// readStream.pipe(writeStream)

//Servers

const http=require('http');
const fs=require('fs');

const server= http.createServer((req,res)=>{
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');
    let path='';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode=200;
            break;
        case '/chatting':
            path += 'chatting.html';
            res.statusCode=200;
            break;
        case '/chatting-app':
            res.statusCode = 301;
            res.setHeader('location','/chatting');
            res.end();
            break;    
        default :
            path+='404.html';
            res.statusCode=404;
            break;

            
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.end(data);
        }
    })
    // 
    
});

server.listen(8000,'localhost',()=>{
    console.log("port 8000")
})