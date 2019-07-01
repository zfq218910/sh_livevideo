const express = require('express')
const app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server);

//监听连接事件(注意:由于js的异步无阻塞的特性,这里的监听事件也是异步的,所以需要把
//断开连接的事件监听放在回调函数里)
io.on('connect',(client)=>{
    // console.log('有客户端连接!')
    let str = '来自服务器的消息:'
    //有客户端连接之后,可以使用emit方法向客户端发送消息
    //群发消息:io.emit('频道','消息内容!')
    //单发消息:client.emit('频道','消息内容')
    //群发消息
    io.emit('message',str+'有新用户连接了')
    //给当前这个连接用户发送
    client.emit('message',str+'欢迎加入')

    //还可以监听频道,接受客户端发送的消息
    //监听message频道的消息
    client.on('message',data=>{
        console.log (data)
        //把消息群发到message频道
        io.emit('message',str+data)
    })



    
    //监听断开事件
    client.on('disconnect',(client)=>{
        console.log('有客户端断开连接!')
        io.emit('message','有人离开了!')
    })
})




//监听启动服务
server.listen(3000,()=>{
    console.log('启动!端口3000')
})