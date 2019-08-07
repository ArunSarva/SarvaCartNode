import mongoose from 'mongoose'
import Usermodel from '../models/usermodel'
import Productmodels from '../models/Productmodels'
const Cryptr = require('cryptr');
const bcrypt = require('bcrypt'); 
const cryptr = new Cryptr('myTotalySecretKey');
const User = mongoose.model('User', Usermodel);
const Product = mongoose.model('Product', Productmodels)
var validator = require("email-validator");


 
// get single download based on the id
exports.Login=(req, res)=> {
    console.log("hi")
    User.find({Email:req.body.Email},(error, data) => {
        console.log(req.body.Password)
        if(data != null && data != ''){
           const pass= cryptr.decrypt(data[0].Password);
        //    console.log("dcrypt"+pass)
           console.log(pass,req.body.Password)
                if(pass == req.body.Password){
                  res.json("Login Successful");
                  console.log("hello")
                }
                else{
                  res.send("Password does not matched");
                }
            } else{
              res.send("User does not exists");
            }
          });
        }
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
   