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

exports.getCart=(req, res)=> {
    console.log("get hi")
    let newCart = new Cart(req.body)
    Cart.find({}, (error, data) => {
        if (error) { res.json(error) }
        res.json(data)
    })
    }
exports.deletecart=(req, res)=> {
    console.log(req)
    Cart.remove({ _id: req.params.id }, (error, data) => {
        if (error) { res.json(error) }
        res.json(data)
    })
}
// update the cart
exports.updateCart=(req, res)=>{
    console.log("update cart")
    Cart.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, data) => {
        if (error) { res.json(error) }
        res.json(data)
    })
}