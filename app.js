const express = require('express')
const app = express()

//cors
const cors = require('cors')
app.use(cors())//未解决跨域问题,引入第三方包cors,并把它配成全局中间键

//由于post提交的数据原生的数据很难处理,引入第三方包body-parser,
//把数据放入req.body中
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

//引入数据库配置文件,获去数据库连接对象
const db = require('./db')

/************* 路由 */
// 注册
app.post('/users',(req,res)=>{
    res.json({
        code:200,
        msg:'ok'
    })
})
//登录
app.post('access_token',(req,res)=>{
    res.json({
        code:200,
        msg:'ok'
    })
})