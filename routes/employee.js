const express=require("express")
const router=express.Router()
const db=require("../db")
const utils=require("../utils")
router.get('/',(request,response)=>{
    const connection=db.connect()
    const sql="select id,name,address,email from employee"
    connection.query(sql,(error,data)=>{
       const result=utils.createResult(error,data)
        response.send(result)
    })
})

router.put('/:id',(request,response)=>{
    const id=request.params.id
    const {name,address,email}=request.body
    const connection=db.connect()
    const sql=`update employee set name='${name}',address='${address}',email='${email}' where id=${id}`
    connection.query(sql,(error,data)=>{
       const result=utils.createResult(error,data)
        response.send(result)
    })
})
router.post('/',(request,response)=>{
    const {name,address,email}=request.body
    const connection=db.connect()
    const sql=`insert into employee(name,address,email) values('${name}','${address}','${email}')`
    connection.query(sql,(error,data)=>{
       const result=utils.createResult(error,data)
        response.send(result)
    })
})


router.delete('/:id',(request,response)=>{
    const id=request.params.id
    const connection=db.connect()
    const sql=`delete from employee where id=${id}`
    connection.query(sql,(error,data)=>{
       const result=utils.createResult(error,data)
        response.send(result)
    })
})


module.exports=router