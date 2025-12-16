const mongoose=require('mongoose')

const signinschema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phoneno:String

})
const siginmodel= mongoose.model("signin",signinschema)
module.exports=siginmodel