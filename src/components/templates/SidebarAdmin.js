import './SidebarAdmin.scss'
import {Link}  from  'react-router-dom'
const SidebarAdmin = () =>{	
	return(
		<div class="sidebar">
		<div class="sidebar__sections">
		 <ul>
			<li><a href="#">
				<svg class="lnr lnr-layers icon"><use xlinkhref="#lnr-layers"></use></svg>
				Pages</a></li>
			<li><a href="#">
				<svg class="lnr lnr-map-marker icon"><use xlinkHref="#lnr-map-marker"></use></svg>
				Destinations</a>
			</li>
			<li><a href="#">
				<svg class="lnr lnr-book icon"><use xlinkHref="#lnr-book"></use></svg>
				Blog</a></li>
			<li><a href="#">
				<svg class="lnr lnr-bus icon"><use xlinkHref="#lnr-bus"></use></svg>
				Travel Shows</a></li>
			<li><a href="#">
				<svg class="lnr lnr-bubble icon"><use xlinkHref="#lnr-bubble"></use></svg>
				Testimonials</a></li>
			</ul>
		</div>
		<div class="sidebar__subsections">
		  <div class="sidebar__subsections-brand">Admin 1.0</div>
		  <ul>
			<li><Link to="/admin/home">Home</Link></li>
			<li><Link to="/admin/cuenta">Ver mi Cuenta</Link></li>
			<li><Link to="/admin/asociados">Registro Asociados</Link></li>
			<li><Link to="/admin/empleados">Registro Empleados</Link></li>
			<li><Link to="/admin/reportes">Reportes</Link></li>
			<li><Link to="/admin/logout">Cerrar Session</Link></li>
		  </ul>
		</div>
		
	  </div>	
	);
}

export default SidebarAdmin;