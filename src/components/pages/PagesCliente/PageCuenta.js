import PageClienteGeneric from './PageClientGeneric'
import {connect} from 'react-redux'
import {useState,useEffect} from 'react'
import './PageCuenta.css'

const PageCuenta = ({cliente}) => {
	const [user,setUser] =useState(!cliente ? {} : cliente);
	useEffect(() => {
		if(!cliente) return null
		else setUser(cliente);		
	});
	return (
		<PageClienteGeneric>
			
			<h1 style={{textAlign:'center'}}>Cuenta cliente 2021</h1>
			<div className="pagecuenta__container">
			
				<div className="pagecuenta__info-cuenta">
					<h1>Nombre : <span>{user.nombres ? user.nombres : "cargando ...."}</span></h1>
					<h1>Apellidos: <span>{user.apellidos ? user.apellidos : "cargando ...."}</span> </h1>
					<h1>Correo : <span>{user.correo ? user.correo : "cargando ...."}</span></h1>
					<h1>Correo : <span>{user.direccion ? user.direccion : "cargando ...."}</span></h1>
					<h1>Correo : <span>{user.estadoCivil ? user.estadoCivil : "cargando ...."}</span></h1>
					
				</div>
				
			</div>

				<img className="pagecuenta__userimg" style={{objectFit:'contain',width:'150px'}} src="https://www.pngkey.com/png/full/493-4930661_user-icono-mi-cuenta-png.png" alt="" />
		</PageClienteGeneric>		
	);
}


const mapStateToProps = (state) =>{
	return {
		cliente:state.clientes.cliente
	}
}

export default   connect(mapStateToProps,null)(PageCuenta)