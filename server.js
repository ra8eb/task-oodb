const express = require('express');
const mongoose = require('mongoose');


let app = express();

async function connect(){
    let connection =  await mongoose.connect('mongodb://0.0.0.0:27017/Studentcollection');
   
 const StudentcollectionSchema = new mongoose.Schema({
    Sname : String,
    phone : String,
    password : String,
    age : Number ,
    address : String,
    

 });

 let StudentcollectionModel = new mongoose.model("Studentcollection", StudentcollectionSchema ); 
 

 const  CourseSchema = new mongoose.Schema({
   Cname : String,
   description : String,

});
let CourseModel = new mongoose.model("Course", CourseSchema );

let newuser = new StudentcollectionModel({
   Sname : "MOHAMMEDRAGHEB",
   phone : "01063537855",
   password : "012RA8EB",
   age : 20,
   address : "portsaid",

}).save();
let newdata = new CourseModel({

   Cname : "database",
   description : "fundmentals of DB"
}).save();

app.get('/Studentcollection', async (Request ,Response)=>{
   let allUsers = await StudentcollectionModel.find();
   Response.status(200) ;
   console.log(allUsers.length)
   Response.json(allUsers)

})
app.get('/',(Request,Response)=>{
   Response.send("hello")
})
app.listen(3000, function() {
   console.log('good')
   })

 }
 connect()