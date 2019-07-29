import { Login,userSignup,Addproduct } from '../Controller/usercontroller'
import { AdminLogin,AdminSignup } from '../Controller/Admincontroller'
import {AddCart} from '../Controller/Cartcontroller'
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

app.route('/Add')
.post(Addproduct)  

//add item to cart
app.route('/AddCart')
    .post(AddCart)
    }
export default routes