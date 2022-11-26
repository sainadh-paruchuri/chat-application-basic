const express=require('express')
const fs=require('fs')

const router=express.Router();

router.get('/login',(req,res,next)=>{
    res.send("<form onsubmit='localStorage.setItem(`username`,document.getElementById(`username`).value)' action='/chat/logins' method='POST' ><input type='text' id='username' name='user'><button type='submit'>Submit</button></form>")

})

router.post('/logins',(req,res,next)=>{
    console.log(req.body.user)
    res.status(302).redirect('/')
})

module.exports=router