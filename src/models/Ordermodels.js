import mongoose from 'mongoose'
 
const Schema = mongoose.Schema
 
const Order = new Schema({
    Product_Brand: {
        type: String,
    },
    Product_Name: {
        type: String,
    },
    Product_Price: {
        type: Number,
    },
    Quantity:{
        type:Number
    },
    Total_price:{
        type:Number
    },
    Address: {
        type: String,
    }

})
 
export default Order;
