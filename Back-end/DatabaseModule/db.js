
var exports = module.exports = {};
var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyA2faJQ7h02ICZEpkTMA0Fb5S8rSgdlA9U",
    authDomain: "blogoz-55f55.firebaseapp.com",
    databaseURL: "https://blogoz-55f55.firebaseio.com",
    projectId: "blogoz-55f55",
    storageBucket: "blogoz-55f55.appspot.com",
    messagingSenderId: "560525668856"
  };
  firebase.initializeApp(config);

  
  /**
   * Added the firebase data to access my Blogoz project repo in order to allow firebase to carry out the authentication process.
   */


exports.sayHelloInEnglish = function() {
  console.log("hello"); 
};

exports.signIn = function(email , password)
{
    
        firebase.auth().signInWithEmailAndPassword(email , password).
        then(() => {
            console.log("successful login"); 
            return true;
        }).catch((error) =>{
           console.log(error); 
           return false;  
        })
}
exports.signInPromise = function(email , password)
{
    return new Promise((resolve  , reject) =>{
        firebase.auth().signInWithEmailAndPassword(email , password)
        .then(() => {
           let temp = true; 
           console.log("resolved"); 
           resolve(temp); 
        })
        .catch((error) =>{
        console.log("rejected"); 
         reject(); 
        })
    })
}
exports.registerPromise = function(email , password)
{
    return new Promise((resolve , reject)=> {
        firebase.auth().createUserWithEmailAndPassword(email , password)
        .then(()=> resolve())
        .catch((err)=> reject(err))
    })
}