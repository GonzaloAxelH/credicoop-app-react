import {connect} from 'react-redux'
import PageAdminGenric from './PageAdminGeneric';
const PageAsociados = ({clientes}) => {
	return (
		<PageAdminGenric pageTitle="Asociados">


				<table>
					<tr>
						<th>ID</th>
						<th>NOMBRES</th>
						<th>APELLIDOS</th>
						<th>DNI</th>
						<th>TELEFONO</th>
						<th>DIRECCION</th>
						<th>CORREO</th>
					</tr>
					{ clientes.map((user)=>{
						return(
					<tr key={user.id_caja}>
				
						<td>{user.id_cliente}</td>
						<td>{user.nombre}</td>
						<td>{user.apellidos}</td>
						<td>{user.dni}</td>
						<td>{user.celular}</td>
						<td>{user.direccion}</td>
						<td>{user.correo}</td>
				
					</tr>
					);
					})}
			</table>
						
			</PageAdminGenric>						
	);
}
const mapStateToProps = (state) =>{
	return {
		clientes:state.clientes.clientes,
	}	
}

export default connect(mapStateToProps,null)(PageAsociados)