import mongoose from 'mongoose'
import Cartmodel from '../models/Cartmodel'
const Cart = mongoose.model('Cart', Cartmodel);

exports.AddCart=(req, res)=> {
    console.log("hii cart");
              var CartData = new Cart(req.body);
              CartData.save(function(err, data){
              if(err)
              res.send(err.message);
              res.json(data);
          })
          }