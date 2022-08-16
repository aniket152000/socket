const express=require('express');
const app=express();
const http=require('http').Server(app);
const path=require('path');
const port= process.env.PORT || 3000;
const io=require('socket.io')(http);

//router  --connect with html                             
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'src/index.html'))
})      

io.on('connection', socket=>{           

    console.log('a user connected');    

    socket.on('disconnect',()=>{
        console.log('A User disconnected');
    })

    socket.on('message',msg=>{
        console.log('client message:'+msg)
    })

    socket.emit("server","receive from server");
    socket.emit("server1","receive from server1");
})

http.listen(port,()=>{
    console.log(`app listening port ${port}`)
})




