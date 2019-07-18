import { Login,userSignup } from '../Controller/usercontroller'

const routes = (app) => {
// to registor
app.route('/signup')
.post(userSignup)
// to login 
app.route('/Login')
.post(Login)    
}
export default routes