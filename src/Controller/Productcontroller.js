import mongoose from 'mongoose'
import Productmodel from '../models/Productmodels'
const Product = mongoose.model('Product', Productmodel)


exports.Addproduct=(req, res)=> {
    console.log("hii product");
              var userData = new Product(req.body);
              userData.save(function(err, data){
              if(err)
              res.send(err.message);
              res.json(data);
          })
          }
exports.Getproduct=(req, res)=> {
    console.log("get product")
    let newproduct = new Product(req.body)
    Product.find({}, (error, data) => {
        if (error) { res.json(error) }
        res.json(data)
    })
}