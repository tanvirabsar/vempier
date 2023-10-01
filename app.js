const express = require('express');
const bodyParser = require('body-parser')
const PORT = 8080;
const app = express();

app.use(express.static('vews'));
app.use(bodyParser.urlencoded({extended : false}));

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/Group/indax.html")
});
app.get("/login", (req,res)=>{
  res.sendFile(__dirname + '/vews/login.html')
});
app.post('/login',(req,res)=>{
  const email = req.body.email
  const password = req.body.password
  console.log(`email: ${email}`);
  console.log(`password: ${password}`);
})
app.use((req,res)=>{
  res.send("<h1>404 error</h1>")
})

app.listen(PORT,()=>{
  console.log(`server is running http://localhost:${PORT}`);
});
