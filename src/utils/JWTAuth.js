
import { Redirect } from 'react-router';
import axios from 'axios';
const URL_BASE = "https://app-credicoop.herokuapp.com";
const SERVER_URL = `${URL_BASE}/api2/login/login.php`;
const login = async (data) => {
	const LOGIN_ENDPOINT = `${SERVER_URL}`;
   		const response = await axios.post(LOGIN_ENDPOINT,data);
  			 if(response.data.hasOwnProperty('jwt')){
				 localStorage.setItem("access_token", response.data.jwt);
     	         localStorage.setItem("access_codigo", response.data.codigo);
	             localStorage.setItem("access_auth", true);
		 	   	 window.location.href="/app/home";
		  }else{
			  if(response.data.hasOwnProperty('jwt_admin')){
				 localStorage.setItem("access_token_admin", response.data.jwt_admin);
     	         localStorage.setItem("access_codigo_admin", response.data.codigo_admin);
	             localStorage.setItem("access_auth_admin", true);

		 	   	 window.location.href="/admin/home";
			  }else{		  
		  		alert("Usuario y contraseña incorrectos")
				  return false;
			  } 
		}
		  
}

const Logout = () =>{
    localStorage.removeItem("access_token");
    localStorage.removeItem("access_auth");
    localStorage.removeItem("access_codigo");
	return(
		<Redirect to="/login"/>
		);
}


const LogoutAdmin = () =>{
    localStorage.removeItem("access_token_admin");
    localStorage.removeItem("access_auth_admin");
    localStorage.removeItem("access_codigo_admin");
	return(
		<Redirect to="/login"/>
	);
}

export { login,LogoutAdmin, Logout } 