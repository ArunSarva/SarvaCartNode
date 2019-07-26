import mongoose from 'mongoose'
// import { pathToFileURL } from 'url';
 
const Schema = mongoose.Schema
 
const Product = new Schema({
    Product_Brand: {
        type: String,                                                                               
        required: 'Product Brand Name required'
    },
    Product_Name: {
        type: String,
        required: 'Product Name required'
    },
    Product_Price: {
        type: String,
        required: 'Product Price required'
    },
    Product_Discription: {
        type: String
    }  
})
 
export default Product;