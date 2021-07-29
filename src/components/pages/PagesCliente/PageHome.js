import './PageHome.css'
import PageClienteGeneric from './PageClientGeneric'
import { useState, useEffect } from 'react';

import axios from 'axios'
const PageHome = () => {
	const [user, setUser] = useState({});
	const URL_BASE_ONLINE = "https://app-credicoop.herokuapp.com";
	const URL_GET_USER = `${URL_BASE_ONLINE}/api2/cliente/cuenta.php`;
	const idUser = localStorage.getItem('access_codigo');
	useEffect(() => {
		const getDataUser = async () => {
			const response = await axios.post(URL_GET_USER, { idUser: idUser });
			const data = await response.data;

			setUser(data)
		}
		getDataUser();
	}, [idUser])


	return (


		<PageClienteGeneric>

			<section className="pagehome__container">
				<img src="https://www.prensaregional.pe/wp-content/uploads/2019/01/Ventanilla-Credicoop.jpg" alt="" />
				<h1>Bienvenido</h1>
				<p>Hola,<span> {user.nombres}</span> </p>
				<p>
					Somos una Cooperativa comprometida con el desarrollo económico y social, a través de la prestación de servicios financieros eficientes y oportunos en una mejora continua y capacitación permanente de sus colaboradores, en un clima de trabajo en equipo.
					Ser una Cooperativa líder, sólida y confiable en la prestación de productos y servicios financieros que contribuyen a mejorar la calidad de vida de nuestros socios y la Comunidad a nivel nacional.
				</p>

				<div className="pagehome__valores">
					<div>
						<h1>Nuestros valores </h1>
						<li>Responsabilidad</li>
						<p>Obligación de responder por los propios actos. Además de garantizar el cumplimiento de los compromisos adquiridos.</p>
						<li>Trabajo en equipo</li>

						<p>
							Disposición de esfuerzos en procura de la realización de los objetivos estratégicos de la Cooperativa, compatibilizando los objetivos individuales y grupales con los de la organización.
						</p>
						<li>Solidaridad</li>
						<p>
							Es la adhesión libre y voluntaria a una causa, creando una relación humana de mutuo apoyo donde la felicidad particular depende de la felicidad colectiva. Es entonces la comunidad de intereses, sentimientos y propósitos.
						</p>
					</div>
						<img src="http://credicooparequipa.pe/assets/img/ourcompany/body.jpg" alt="" />
				</div>
			
				
			</section>

		</PageClienteGeneric>

	);
}

export default PageHome;