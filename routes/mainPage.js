const express=require('express')
const fs=require('fs')
const login=require('./chats')
const router=express.Router();

router.get('/',(req,res,next)=>{
    fs.readFile("messae.txt" , { encoding:"utf-8"},(err,data)=>{
            res.send(`${data}<form onSubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/message" method="POST"><input type="hidden" id="username" name="user"><input type="text" id="meassage" name="msg"><button type="submit">Submit</button></form>`)


    })

    
    // res.send('<h1> Hello From Express</h1>');

})
router.post('/message',(req,res)=>{
    console.log(req.body)
    
    let user=req.body.user;
    console.log(user)
    let message=req.body.msg
   fs.appendFile("messae.txt", `${user}:${message}`,err=>{
    console.log(err)
   })
    res.redirect('/')
})

module.exports=router