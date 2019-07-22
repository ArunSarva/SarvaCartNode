import mongoose from 'mongoose'
import Productmodel from '../models/Productmodel'
const Cryptr = require('cryptr');
const bcrypt = require('bcrypt'); 
const cryptr = new Cryptr('myTotalySecretKey');
const Product = mongoose.model('Product', Productmodel)
var validator = require("email-validator");


exports.AddProduct = function(req, res){
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
