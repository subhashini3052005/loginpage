const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app=express()
const signinmodelss = require('./modules/signin')



app.use(express.json())
app.use(cors())
app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    signinmodelss.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")
            }
            else{
                res.json("incorrect password")
            }
        }
        else{
            res.json("record not found")
        }
})
})

app.post('/signin',(req,res)=>{
     signinmodelss.create(req.body)
     .then(sigin=>res.json(sigin))
     .catch(err=>res.json(err))
})


mongoose.connect('mongodb://127.0.0.1:27017');

app.listen(3001,()=>{
    console.log("server is running")
})
