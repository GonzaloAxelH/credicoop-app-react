import {BrowserRouter as Router,Link, Switch,Route, Redirect }  from  'react-router-dom'

import "./App.css"
import PageLogin from './components/pages/Login/PageLogin'
import PageHome from './components/pages/PagesCliente/PageHome'
import PageCuenta from './components/pages/PagesCliente/PageCuenta'
import PageReportes from './components/pages/PagesCliente/PageReportes'
import PagesTransacciones from './components/pages/PagesCliente/PageTransaccions'
import { Logout ,LogoutAdmin}from './utils/JWTAuth'
import Checkout from './components/pages/Checkout/Checkout'

import PageAdminHome from './components/pages/PagesAdmin/PageHome'
import PageAdminCuenta from './components/pages/PagesAdmin/PageCuenta'
import PageAdminReportes from './components/pages/PagesAdmin/PageReportes'
import PageAdminEmpleados from './components/pages/PagesAdmin/PageEmpleados'
import PageAdminAsociados from './components/pages/PagesAdmin/PageAsociados'


const Index  = () => {
  return(
    <>
    <h1>Pagina incio</h1>
    <Link to="/login">Entrar al sistema</Link>
    </>
  )
}

const auth=localStorage.getItem('access_auth');
const auth_admin = localStorage.getItem('access_auth_admin');

const PrivateRoute = ({component:Component,...rest})=>{
  return(
    <Route {...rest}>
      {auth ? <Component /> : <Redirect to="/login" />}
    </Route>
  )
}

const PrivateRouteAdmin = ({component:Component,...rest})=>{
  return(
    <Route {...rest}>
      {auth_admin ? <Component /> : <Redirect to="/login" />}
    </Route>
  )
}


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route path='/login' component={PageLogin}/>
         
          <PrivateRoute path='/app/cuenta' component={PageCuenta}/>
          <PrivateRoute path='/app/pagos' component={PagesTransacciones}/>
          <PrivateRoute path='/app/reportes' component={PageReportes}/>
          <PrivateRoute exact  path='/app/home' component={PageHome}/>          
          <PrivateRoute path='/app/logout' component={Logout}/>
          <PrivateRoute exact  path='/app/checkout' component={Checkout}/>          



          <PrivateRouteAdmin exact  path='/admin/home' component={PageAdminHome}/>          
          <PrivateRouteAdmin exact  path='/admin/cuenta' component={PageAdminCuenta}/>          
          <PrivateRouteAdmin exact  path='/admin/asociados' component={PageAdminAsociados}/>          
          <PrivateRouteAdmin exact  path='/admin/empleados' component={PageAdminEmpleados}/>          
          <PrivateRouteAdmin exact  path='/admin/reportes' component={PageAdminReportes}/>          
          <PrivateRouteAdmin exact  path='/admin/logout' component={LogoutAdmin}/>          
          <PrivateRouteAdmin exact  path='/admin/logout' component={LogoutAdmin}/>          

        </Switch>
    </Router>
    );
}
export default App;
