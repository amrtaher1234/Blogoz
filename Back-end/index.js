
var express = require('express');
var app = express();
var cors = require("cors"); 
var jwt = require("jsonwebtoken"); 
var bodyParser = require("body-parser"); 
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var db = require("./DatabaseModule/db.js"); 

/**
 * in the above section i imported the required modules
 * Jwt and db (i created this module) will be used for user signing in 
 * other modules like body parser and multer are used to parse the requests (posts) or (get) coming from client side (angular)
 */
app.use(cors()); 
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 



app.get('/', function(req, res){  
res.send("Main Page"); 
});

const serverJWT_Secret = 'kpTxN=)7mX3W3SEJ58Ubt8-'; // a random string to automate the jtw process

/**
 * in the below function i use a auth function made in the db.js recieving a promise and resolving it when 
 * the login is successful. After the auth is successful i create a token using the jwt module and send it back as
 * a result dot send object to contain both the email and the token.
 */


app.post('/api/login/' , function(req , res){  // login/amrtaher@gmail.com/****** would send a  response of successful to the front end */
    db.signInPromise( req.body.email , req.body.password)
    .then(()=> {
        const token = jwt.sign(req.body.email, serverJWT_Secret);
        res.status(200).send({
            user: req.body.email,
            token: token
          });
    })
    .catch(()=>{
        res.status(403).send({
            errorMessage: 'Please provide email and password'
          });
    });
});

app.get('/api/register', (req, res) => {
    db.registerPromise(req.body.email , req.body.password)
    .then(()=>
    {

    }).catch(()=>
    {
        
    })
  });
  

  

  
//   app.post('/api/login', (req, res) => {
  
//     if (req.body) {
//       const user = appUsers[req.body.email];
//       if (user && user.pw === req.body.password) {
//         const userWithoutPassword = {...user};
//         delete userWithoutPassword.pw;
//         const token = jwt.sign(userWithoutPassword, serverJWT_Secret); // <==== The all-important "jwt.sign" function
//         res.status(200).send({
//           user: userWithoutPassword,
//           token: token
//         });
//       } else {
//         res.status(403).send({
//           errorMessage: 'Permission denied!'
//         });
//       }
//     } else {
//       res.status(403).send({
//         errorMessage: 'Please provide email and password'
//       });
//     }
  
//   });
  
  app.listen(5000, () => console.log('Server started on port 5000'));