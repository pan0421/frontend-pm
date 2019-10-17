/* 
使用mockjs实现mock数据接口
*/
let express = require('express')
let Mock = require('mockjs')
let product = require('./product.json')  // 自动解析为js  可以相互转换
let userList = require('./user.json') // 自动解析为js  可以相互转换
let qs = require('qs')

const app = express()

// Mock.mock('/api/products', {code: 0, data: product})

// Mock.mock('/api/login_pwd', 'post', (req, res)=>{
//   const {username, pwd} = qs.parse(req.body)
//   let resultData = {}
//   userList.some(user => {
//     if(Object.values(user).indexOf(username) > -1 && user.password == pwd){ 
//       resultData = {code: 0, data: user}
//       return true
//     } else{
//       resultData = {
//         code: 1,
//         msg: "Error"
//       }
//     }   
//   })
//   return resultData
// })

// Mock.mock('/api/auto_login', 'get', (req, res)=>{
//   const {username, pwd} = qs.parse(req.body)
//   let resultData = {}
//   userList.some(user => {
//     if(Object.values(user).indexOf(username) > -1 && user.password == pwd){ 
//       resultData = {code: 0, data: user}
//       return true
//     } else{
//       resultData = {
//         code: 1,
//         msg: "Error"
//       }
//     }   
//   })
//   return resultData
// })

let server = app.listen(9999, () => {
  let port = server.address().port
  console.log('server running successfully...')
  console.log(`server listening at http://localhost:${port}`)
})









