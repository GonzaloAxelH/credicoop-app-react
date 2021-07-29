import {createStore ,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'

const initialState = {
		cajeros:{
			cajero:{},
			cajeros:[]
		},
		gestores:{
			gestor:{},
			gestores:[]
		},
		clientes:{
			cliente:{},
			clientes:[]
		},
		analistas:{
			analista:{},
			analistas:[]
		},
		reportes:[],
		deudas:[],
		checkout:{},
		admin:{}
}


const cajeros = (state=initialState.cajeros,action) => {
	if(action.type === "LOAD_CAJEROS") return action.cajeros;
	if(action.type === "UPDATE_CAJERO"){}
	return state;
}

const gestores = (state=initialState.gestores,action) =>{
	if(action.type === "LOAD_GESTORCOBRANZA") return action.gestores;
	return state;
}

const clientes = (state=initialState.clientes,action) => {
	if(action.type === "LOAD_CLIENTES") return action.clientes;
	if(action.type === "LOAD_CLIENTE_ID") return action.clientes
	if(action.type === "UPDATE_CLIENTE") return action.clientes;
	if(action.type === "DELETE_CLIENTE") return action.clientes;
	return state;
}

const analistas = (state=initialState.analistas,action) =>{
	if(action.type == "LOAD_ANALISTAS") return action.analistas;
	return state;
}

const reportes = (state=initialState.reportes,action) => {
	if(action.type == "LOAD_REPORTES") return action.reportes;
	return state;
}

const deudas = (state=initialState.deudas,action) => {
	return state;
}


const checkout = (state=initialState.checkout,action) =>{
	if(action.type == "HACER_PAGO") return state;
	return state;
	
}

const admin = (state=initialState.admin,action) =>{
	if(action.type == "LOAD_ADMIN")  return action.admin
	return state;
}

const isLogged = (store) => (next) => (action)=>{
	let codigo = localStorage.getItem('access_codigo');
	let codigo_admin = localStorage.getItem('access_codigo_admin');
	next(action);
	//else console.log('no esta logeado, no se muestra los datos')
}


export default createStore(
	combineReducers({
		cajeros:cajeros,
		gestores:gestores,
		clientes:clientes,
		analistas:analistas,
		reportes:reportes,
		deudas:deudas,
		checkout:checkout,
		admin:admin
	}),
	applyMiddleware(isLogged,thunk)
)