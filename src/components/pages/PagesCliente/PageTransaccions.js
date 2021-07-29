import {Link} from 'react-router-dom'
import PageClientGenric from './PageClientGeneric'
import './PageTransaccions.scss'
import { enviarPago } from '../../../data/actionCreators'
import { useEffect,useState } from 'react'
const PageTransacciones = () =>{
	const [monto,setMonto] = useState(numeroAleatorioDecimales(98,750))
	const [btnEnable,setBtnEnalbe] = useState(true);
	useEffect(()=>{
		const montoAleatorio = numeroAleatorioDecimales(98,750);
		setMonto(montoAleatorio);
	},[])	
	
	const payMontoClick= () =>{
		alert(`Pagar:${monto}  con codigo ${localStorage.getItem('access_codigo')}`);	
			localStorage.setItem('monto_pago',monto);
	};

	function numeroAleatorioDecimales(min, max) {
		var num = Math.random() * (max - min);
		let n = num + min;
		return  parseFloat(Math.round(n * 100) / 100).toFixed(2);
	}
	return(
		<PageClientGenric>
				<div class="page__transaccions">
				
					<section class="data-summary">
						<div class="data-info bg-yellow">
						<h6 class="data-info__heading">SEPTIEMBRE</h6>
						<div class="data-info__content">
							<sup class="sup">S/.</sup><span class="data-info__amount text-lg">1,253</span>
						</div>
						</div>
						<div class="data-info bg-blue">
						<h6 class="data-info__heading">AGOSTO</h6>
						<div class="data-info__content">
							<sup class="sup">S/.</sup><span class="data-info__amount text-lg">1,747</span>
						</div>
						</div>
						<div class="data-info data-info--light">
						<h6 class="data-info__heading"> PAGO SIGUIENTE<p>JULIO</p> <span style={{color:'orange'}}>(3 dias restantes)</span></h6>
						<div class="data-info__content">
							<sup class="sup">S/.</sup><span class="data-info__amount text-lg">{monto}</span>
						</div>
						<div class="data-info__tag">Pague ahora!!</div>
						<div class="data-info__tag" style={{color:'red'}} >Sin servicio!!</div>
						</div>
					<Link style={{width:'150px',marginLeft:'3.2em'}} to="/app/checkout"><button onClick={payMontoClick} class="btn btn-primary" style={{height:'100px',borderRadius:'15px',cursor:"pointer",margin:'0.8em'}}>Make Payment Now</button></Link>
					</section>
					<section class="data-body">
						<div class="scroll-check">
						<table id="data-table">
							<thead>
							<tr class="table__row--header">
								<th><span class="header__title">PERIODO</span></th>
								<th><span class="header__title">DEUDA</span></th>
								<th><span class="header__title">INTERESES(19%)</span></th>
								<th><span class="header__title">FEHCHA APERTURA</span></th>
								<th><span class="header__title">TOTAL PAGO</span></th>
							</tr>
							</thead>

							<tbody class="table__body">
							<tr class="table__row">
								<td><span class="id">ZZ01</span></td>
								<td><span class="merchant">The standard miami</span></td>
								<td><span class="charge">purchase</span></td>
								<td><span class="date">April 18</span></td>
								<td><span class="price">S/.648</span></td>
							</tr>
							<tr class="table__row">
								<td><span class="id">ZZ02</span></td>
								<td><span class="merchant">Delta Airlines</span></td>
								<td><span class="charge">pending</span></td>
								<td><span class="date">April 23</span></td>
								<td><span class="price">S/.465</span></td>
							</tr>
							<tr class="table__row">
								<td><span class="id">ZZ03</span></td>
								<td><span class="merchant">Netflix</span></td>
								<td><span class="charge">subscription</span></td>
								<td><span class="date">April 29</span></td>
								<td><span class="price">S/.9</span></td>
							</tr>
							<tr class="table__row">
								<td><span class="id">ZZ04</span></td>
								<td><span class="merchant">Pringles</span></td>
								<td><span class="charge">purchase</span></td>
								<td><span class="date">April 29</span></td>
								<td><span class="price">S/.756</span></td>
							</tr>
							<tr class="table__row">
								<td><span class="id">ZZ05</span></td>
								<td><span class="merchant">Right Gas Fuel</span></td>
								<td><span class="charge">purchase</span></td>
								<td><span class="date">April 29</span></td>
								<td><span class="price">S/.100</span></td>
							</tr>
							<tr class="table__row">
								<td><span class="id">ZZ06</span></td>
								<td><span class="merchant">LoL 2020 Worlds Ticket</span></td>
								<td><span class="charge">purchase</span></td>
								<td><span class="date">April 30</span></td>
								<td><span class="price">S/.,349</span></td>
							</tr>
							<tr class="table__row">
								<td><span class="id">ZZ07</span></td>
								<td><span class="merchant">Netflix</span></td>
								<td><span class="charge">subscription</span></td>
								<td><span class="date">April 32</span></td>
								<td><span class="price">S/.90</span></td>
							</tr>
							<tr class="table__row">
								<td><span class="id">ZZ08</span></td>
								<td><span class="merchant">Delta Airlines</span></td>
								<td><span class="charge">subscription</span></td>
								<td><span class="date">April 33</span></td>
								<td><span class="price">S/.34</span></td>
							</tr>
							<tr class="table__row">
								<td><span class="id">ZZ09</span></td>
								<td><span class="merchant">COS Online</span></td>
								<td><span class="charge">purchase</span></td>
								<td><span class="date">April 34</span></td>
								<td><span class="price">S/.12</span></td>
							</tr>
							</tbody>
						</table>
						</div>
					</section>
					</div>
</PageClientGenric>
					
		)
}

export default PageTransacciones