const express = require("express");

const app =express();

const userModel = require("./usermodel");

app.get('/', (err, res)=>{
  res.send("hello");
})

app.get('/create', async (req, res)=>{
 let createduser = await userModel.create({
    name: "Amit",
    username: "Akdhurway",
    email: "akdhurway@gmail.com"
  })
  res.send(createduser);
})

app.get('/read', async (req, res)=>{
  let users = await userModel.find()
  res.send(users);

})

app.get('/update', async (req, res)=>{
  let updateduser = await userModel.findOneAndUpdate({username:"Akdhurway"}, {name:"Madhu"},{new: true})
  res.send(updateduser);

})


app.get('/delete', async (req, res)=>{
  let users = await userModel.findOneAndDelete({username:"Akdhurway"});
  res.send(users);
})



app.listen(3000);