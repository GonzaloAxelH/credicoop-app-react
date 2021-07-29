import axios from 'axios'
import { CSVLink,CSVDownload } from 'react-csv';
import { useState,useEffect } from 'react';
import PageClienteGeneric from './PageClientGeneric'
import {connect} from 'react-redux'
import './PageReportes.css'
const PageReportes = ({reportes}) => {
	/*const [Reportes,setReportes] =useState(!reportes ? [] : reportes);
	useEffect(() => {
		if(!reportes) return null
		else setReportes(reportes);		
	});*/
	return (
		<PageClienteGeneric>
			
			<div className="pagehome__container">
			<h1>Reportes</h1>		
				<table>
					<thead>
						<tr>
							<th>Id Transaccion</th>
							<th>Monto Pagado</th>
							<th>Fecha de Transaccion</th>
						</tr>
					</thead>
					<tbody>

						{ 
					reportes.map((reporte) =>{
							return (
							<tr key ={reporte.id_trans}>
								<td>{reporte.id_trans}</td>
								<td>{reporte.monto}</td>
								<td>{reporte.fecha_trans}</td>
							</tr>
							);
						})
					}
					
					</tbody>
				</table>
				</div>
				<CSVLink data={reportes}>
				<button className="button__download green">	
						Exportar a Excel
				</button>		

			</CSVLink>
		</PageClienteGeneric>		
	);
}

	/*<CSVLink data={reportes}>
				<button className="button__download green">	
						Exportar a Excel
				</button>		

			</CSVLink>
*/
			const mapStateToProps = (state) =>{
	return {
		reportes:state.reportes
	}
}


export default connect(mapStateToProps,null)(PageReportes)