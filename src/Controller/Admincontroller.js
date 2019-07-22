import mongoose from 'mongoose'
import Adminmodel from '../models/Adminmodel'
const Cryptr = require('cryptr');
const bcrypt = require('bcrypt'); 
const cryptr = new Cryptr('myTotalySecretKey');
const Admin = mongoose.model('Admin', Adminmodel)
var validator = require("email-validator");


 
// get single download based on the id
exports.AdminLogin=(req, res)=> {
    console.log("hi admin login")
    Admin.find({Email:req.body.Email},(error, data) => {
        if(data != null && data != ''){
           const pass= cryptr.decrypt(data[0].Password);
        //    console.log("dcrypt"+pass)
                if(pass == req.body.Password){
                  res.json("Login Successful");
                }
                else{
                  res.send("Password does not matched");
                }
            } else{
              res.send("User does not exists");
            }
          });
        }
exports.AdminSignup = function(req, res){
    console.log("hii admin sign up");
    Admin.find({Email: req.body.Email},function(err, data){
        if(data != null && data != ''){
        res.send('User already exists');
        }
        else
        {
            const reg= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/;
            if(reg.test(req.body.Password))
            {
                req.body.Password = cryptr.encrypt(req.body.Password);
                var userData = new Admin(req.body);
                userData.save(function(err, data){
                if(err)
                res.send(err.message);
                res.json("Successfully registered");
            })
            }
        }
    });
    };
