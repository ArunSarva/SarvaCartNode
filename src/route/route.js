import { Login,userSignup } from '../Controller/usercontroller'
import { AdminLogin,AdminSignup } from '../Controller/Admincontroller'
import {AddCart,getCart,deletecart,updateCart} from '../Controller/Cartcontroller'
import {Addproduct,Getproduct} from '../Controller/Productcontroller'
import {Addorder,Getorder,Deliver} from '../Controller/Ordercontroller'
const routes = (app) => {
// to user registor
app.route('/signup')
.post(userSignup)
// to user login 
app.route('/Login')
.post(Login)    
// to Admin registor
app.route('/Adminsignup')
.post(AdminSignup)
// to admin login 
app.route('/AdminLogin')
.post(AdminLogin)   

//add product
app.route('/Addproduct')
.post(Addproduct)  

//get products
app.route('/Getproduct')
.get(Getproduct)

//add item to cart
app.route('/AddCart')
    .post(AddCart)

//get cart
app.route('/Getcart')
    .get(getCart)
// delet from cart
app.route('/deletecart/:id')
.delete(deletecart)

//update cart
app.route('/updateCart/:id')
.put(updateCart)
    
//add order
app.route('/Addorder')
.post(Addorder)

//get order
app.route('/Getorder')
.get(Getorder)

//
app.route('/Deliver/:id')
.delete(Deliver)
}
export default routes