
import './PageEmpleados.scss' 
import PageAdminGenric from './PageAdminGeneric';
import { connect } from 'react-redux'

const PageEmpleados = ({cajeros,analistas,gestores}) => {
	return (
		<PageAdminGenric pageTitle="Empleados">
			<div>

				<h1 className="title">Tabla de cajeros</h1>
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
					{ cajeros.map((user)=>{
						return(
					<tr key={user.id_caja}>
						<td>{user.id_caja}</td>
						<td>{user.nombres}</td>
						<td>{user.apellidos}</td>
						<td>{user.dni}</td>
						<td>{user.celular}</td>
						<td>{user.direccion}</td>
						<td>{user.correo}</td>
					</tr>
					);
					})}
			</table>
				<h1 className="title" >Tabla de cobranza</h1>
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

					{ analistas.map((user)=>{
						return(
					<tr key={user.id_analista}>
						<td>{user.id_analista}</td>
						<td>{user.nombres}</td>
						<td>{user.apellidos}</td>
						<td>{user.dni}</td>
						<td>{user.celular}</td>
						<td>{user.direccion}</td>
						<td>{user.correo}</td>
					</tr>
					);
					})}
				</table>
				<h1  className="title">Tabla de analistas</h1>
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

					{ gestores.map((user)=>{
						return(
					<tr key={user.id_gestor}>
						<td>{user.id_gestor}</td>
						<td>{user.nombres}</td>
						<td>{user.apellidos}</td>
						<td>{user.dni}</td>
						<td>{user.celular}</td>
						<td>{user.direccion}</td>
						<td>{user.correo}</td>
					</tr>
					);
					})}
				</table>
			</div>
		</PageAdminGenric>
	);
}

const mapStateToProps = (state) =>{
	return {
		analistas:state.analistas.analistas,
		gestores:state.gestores.gestores,
		cajeros:state.cajeros.cajeros
	}	
}




export default connect(mapStateToProps,null)(PageEmpleados)