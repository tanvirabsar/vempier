const express = require('express');
const PORT = 8080;
const app = express()

app.get("/",(req,res)=>{
  res.sendFile(__dirname + )
})
app.use((req,res)=>{
  res.send("<h1>404 error</h1>")
})

app.listen(PORT,()=>{
  console.log(`server is running http://localhost:8080`);
  console.log("If you host the site you must be start cloudflare server & ngrok server")
})
