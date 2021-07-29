import axios from 'axios'
import store from './store';
const URL_BASE = "https://app-credicoop.herokuapp.com/";
const URLS = {
	getCajeros:"api2/admin/caja.php",
	getAnalistas:"api2/admin/analistas.php",
	getGestores:"api2/admin/empleados.php",
	getClientes:"api2/admin/clientes.php",
	getClienteById:"api2/cliente/cuenta.php",
	getReportesId:"api2/cliente/reportes.php",
	postPago:"api2/cliente/pagos.php",
	getAdminById:"api2/admin/cuenta.php"
}

export const loadCajeros = () =>{
	return dispatch =>{
		return axios.get(`${URL_BASE}${URLS.getCajeros}`)
		.then(res => {
			dispatch({
				type:"LOAD_CAJEROS",
				cajeros:{
					cajeros:res.data.data
				}
			})
		})
	}
}



export const loadGestores = () =>{
	return dispatch =>{
		return axios.get(`${URL_BASE}${URLS.getGestores}`)
		.then(res => {
			dispatch({
				type:"LOAD_GESTORCOBRANZA",
				gestores:{
					gestores:res.data.data
				}
			})
		})
	}
}


export const loadAnalistas= () =>{
	return dispatch =>{
		return axios.get(`${URL_BASE}${URLS.getAnalistas}`)
		.then(res => {
			dispatch({
				type:"LOAD_ANALISTAS",
				analistas:{
					analistas:res.data.data
				}
			})
		})
	}
}





export const loadClientes = () =>{
	return dispatch =>{
		return axios.get(`${URL_BASE}${URLS.getClientes}`)
		.then(res => {
			console.log(res.data.data)
			dispatch({
				type:"LOAD_CLIENTES",
				clientes:{
					clientes:res.data.data
				}
			})
		})
	}
}

export const loadClienteId = ()=>{
	let idCliente = localStorage.getItem('access_codigo');
	return dispatch => {
		return axios.post(`${URL_BASE}${URLS.getClienteById}`,{idUser:idCliente})
		.then(res =>{
			
			dispatch({
				type:"LOAD_CLIENTE_ID",
				clientes:{
					cliente:res.data,
					clientes:store.getState().clientes.clientes	
				}
			})
		})
	}	
}


export const loadReportesId = ()=>{
	if(localStorage.getItem('access_codigo')){
	let idCliente = localStorage.getItem('access_codigo');
	return dispatch => {
		return axios.post(`${URL_BASE}${URLS.getReportesId}`,{idUser:idCliente})
		.then(res => {
			//console.log(res.data)
			dispatch({
				type:"LOAD_REPORTES",
				reportes:res.data.data
			})
		})
	  }	
	}else{
		return {
				type:"LOAD_REPORTES",
				reportes:[]
		}
	}

}
export const enviarPago = ()=>{
	let idCliente = localStorage.getItem('access_codigo');
	let monto = localStorage.getItem('monto_pago');
	return dispatch => {
		return axios.post(`${URL_BASE}${URLS.postPago}`,{id_cliente:idCliente,monto:monto})
		.then(res => {
  			store.dispatch(loadReportesId());
			dispatch({
				type:"HACER_PAGO",
				pago:{}
			})
		})
	}	
}

export const loadAdminById = ()=>{
	let idAdmin = localStorage.getItem('access_codigo_admin');
	return dispatch => {
		return axios.post(`${URL_BASE}${URLS.getAdminById}`,{idAdmin:idAdmin})
		.then(res =>{
			dispatch({
				type:"LOAD_ADMIN",
				admin:res.data
			})
		})
	}	
}










