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
    // exports.deletecart=(req, res) => {
    //     await Cart.findOneAndDelete({ _id: req.params.id }, (err, data) => {
    //         if (err) {
    //             return res.status(400).json({ success: false, error: err })
    //         }
    
    //         if (!data) {
    //             return res
    //                 .status(404)
    //                 .json({ success: false, error: `item not found` })
    //         }
    
    //         return res.status(200).json({ success: true, data: data })
    //     }).catch(err => console.log(err))
    // }
    // delete the download from the database.
exports.deletecart=(req, res)=> {
    console.log(req)
    Cart.remove({ _id: req.params.id }, (error, data) => {
        if (error) { res.json(error) }
        res.json(data)
    })
}