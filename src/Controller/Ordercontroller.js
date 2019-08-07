import mongoose from 'mongoose'
import Ordermodel from '../models/Ordermodels'
const Order = mongoose.model('Order', Ordermodel)


exports.Addorder=(req, res)=> {
    console.log("hii order");
              var OrderData = new Order(req.body);
              OrderData.save(function(err, data){
              if(err)
              res.send(err.message);
              res.json(data);
          })
          }
exports.Getorder=(req, res)=> {
    console.log("get product")
    let newOrder = new Order(req.body)
    Order.find({}, (error, data) => {
        if (error) { res.json(error) }
        res.json(data)
    })
}
exports.Deliver=(req, res)=> {
    console.log(req)
    Order.remove({ _id: req.params.id }, (error, data) => {
        if (error) { res.json(error) }
        res.json(data)
    })
}