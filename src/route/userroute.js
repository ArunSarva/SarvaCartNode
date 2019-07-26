import { Login,userSignup,Addproduct } from '../Controller/usercontroller'
import { AdminLogin,AdminSignup } from '../Controller/Admincontroller'

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
}
export default routes