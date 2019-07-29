import mongoose from 'mongoose'
 
const Schema = mongoose.Schema
 
const Cart = new Schema({
    Product_Brand: {
        type: String,                                                                               
        required: 'Product Brand Name required'
    },
    Product_Name: {
        type: String,
        required: 'Product Name required'
    },
    Product_Price: {
        type: Number,
        required: 'Product Price required'
    },
    Product_Discription: {
        type: String
    } ,
    Quantity:{
        type:Number
    },
    Total_price:{
        type:Number
    }

})
 
export default Cart;
