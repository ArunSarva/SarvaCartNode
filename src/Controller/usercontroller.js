import mongoose from 'mongoose'
import Usermodel from '../models/usermodel'
import Productmodels from '../models/Productmodels'
const Cryptr = require('cryptr');
const bcrypt = require('bcrypt'); 
const cryptr = new Cryptr('myTotalySecretKey');
const User = mongoose.model('User', Usermodel);
const Product = mongoose.model('Product', Productmodels)
var validator = require("email-validator");
var isAuth=require('../midleware/isAuth');
var jwt=require('jsonwebtoken');

// get single download based on the id
// exports.Login=(req, res)=> {
//     console.log("hi")
//     User.find({Email:req.body.Email},(error, data) => {
//         console.log(req.body.Password)
//         if(data != null && data != ''){
//            const pass= cryptr.decrypt(data[0].Password);
//         //    console.log("dcrypt"+pass)
//            console.log(pass,req.body.Password)
//                 if(pass == req.body.Password){
//                   res.json("Login Successful");
//                   console.log("hello")
//                 }
//                 else{
//                   res.send("Password does not matched");
//                 }
//             } else{
//               res.send("User does not exists");
//             }
//           });
//         }
exports.Login = (req,res,next) =>{
  const email = req.body.Email;
  const password = req.body.password;
  let loadedUser;
  User.findOne({Email: email})
  .then(user =>{
  console.log(user);
  if(!user){
  const error = new Error('A user with this email could not be found.');
  error.statusCode = 401;
  throw error;
  }
  loadedUser = user;
  const token = jwt.sign(
  {
  email: loadedUser.email,
  userId:loadedUser._id.toString()
  },'secret')
  return res.status(200).json({token: token, userId: loadedUser._id.toString(), email: loadedUser.email})
  })
  .catch(err => {
  if (!err.statusCode) {
  err.statusCode = 500;
  } 
  next(err);
  }); 
  }
  exports.getAllSignin = (isAuth,function(req, res) {
    console.log("hello signin")
    User.find({userId:req.decodedToken}, function(err, data) {
    if (err)
    res.send(err);
    res.json(data); 
    });
    });
exports.userSignup = function(req, res){
    console.log(req);
    User.find({Email: req.body.Email},function(err, data){
        if(data != null && data != ''){
        res.send('User already exists');
        }
        else
        {
            const reg= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/;
            if(reg.test(req.body.Password))
            {
                req.body.Password = cryptr.encrypt(req.body.Password);
                var userData = new User(req.body);
                userData.save(function(err, data){
                if(err)
                res.send(err.message);
                res.json(data);
            })
            }
        }
    });
    };
   