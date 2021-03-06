import './Sidebar.scss'
import { Link } from 'react-router-dom'
const Sidebar = () => {
	return (
		<header class="side-header">
			<a href="#">
				<div class="logo">
					CREDICOOP<p style={{fontSize:'12px'}}>Arequipa</p>
				</div>
			</a>
			<nav class="navbar-side">
				<ul>
					<li  ><Link to="/app/home">
						<div class="svg-space">
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 90 112.5" enableBackground="new 0 0 90 90" xml="" space="preserve" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M70.7,78.7H19.3l0-43.4L45,11l25.7,24.3L70.7,78.7z M21.3,76.7h47.4l0-40.6L45,13.7L21.3,36.1L21.3,76.7z"></path><path d="M56.5,78.7h-23V53.9h23V78.7z M35.5,76.7h19V55.9h-19V76.7z"></path></svg>
						</div>
						Home</Link>
					</li>
					<li><Link to="/app/cuenta">
						<div class="svg-space">
							<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 64 80" enableBackground="new 0 0 64 64" xmlSpace="preserve"><g><g><path d="M33,56.5c-10.2,0-18.8-8.2-20-19c-0.4-3.9-0.3-4.9,0-7.2c0.1-0.8,1.3-3.6,2.6-3.6H16l0.3,0.3c0.2,0.2,0.3,0.4,0.3,0.9    c-0.1,6.7,2.9,10.8,4.6,12.3l-0.1-0.3c-2.9-7.1-5.7-13.7,0.6-23c4.6-6.8,10.6-9,10.9-9.1l1.6-0.6L34,9c0,0.1-2.1,12.8,6.2,15.3    c3.9,1.2,11.3,5.7,11.1,14C51,49,43.5,56.5,33,56.5z M14.9,31.1c-0.2,1.7-0.3,2.7,0.1,6.2c1.1,9.8,8.9,17.2,18,17.2    c9.3,0,16-6.7,16.3-16.3c0.2-7.1-6.2-10.9-9.7-12c-7.9-2.4-8.1-11.8-7.8-15.8c-2,1-5.5,3.4-8.4,7.6c-5.6,8.4-3.2,14.3-0.4,21.1    l0.5,1.1c0.3,0.8,0.3,1.4,0,1.9c-0.3,0.4-0.7,0.6-1.2,0.6c-1.1,0-2.3-1.1-3-1.7C18.4,40.1,15.7,36.8,14.9,31.1z" /></g><g><path d="M35.3,50L35.3,50c-0.3,0-0.6,0-0.6,0c-3.7-0.3-5.7-1.6-5.8-1.7l-1.7-1.2l2-0.6c8.4-2.5,4.7-17.5,4.6-17.7l-0.3-1.3    l1.4,0.1c9,0.5,10,9.1,10,9.2c0.4,4.5-0.5,8-2.6,10.3C39.9,49.7,36.6,50,35.3,50z M32,47.5c0.8,0.2,1.7,0.4,2.9,0.5    c0,0,0.2,0,0.4,0l0,0c1,0,3.7-0.2,5.6-2.3c1.7-1.9,2.4-4.8,2.1-8.8c0-0.2-0.7-6.1-6.8-7.2C36.9,33.5,38.2,43.6,32,47.5z" /></g></g>
							</svg></div> Cuenta</Link>
					</li>
					<li><Link to="/app/pagos">
						<div class="svg-space">
							<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 64 80" enableBackground="new 0 0 64 64" xmlSpace="preserve"><g><g><g><path d="M57,51H7V21h50V51z M9,49h46V23H9V49z" /></g><g><path d="M29.7,23H7V13h19.7L29.7,23z M9,21h18.1l-1.8-6H9V21z" /></g></g></g>
							</svg></div> Pagos</Link>
					</li>
					<li><Link to="/app/reportes"><div class="svg-space"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 500 625" enableBackground="new 0 0 500 500" xmlSpace="preserve"><g><g><g><path d="M85,214.2c13.9-69.7,66.3-127.1,135-146.1c69-19.1,144.2,3.6,191.7,57c47.1,53,59.6,129.5,33.6,195.3     c-25.1,63.5-86.5,110.1-154.4,117.1c-36.7,3.8-74.4-2.9-107.2-19.9c-32.4-16.8-59.4-42.8-77.5-74.6c-4.3-7.6-8.2-15.4-11.4-23.5     c-2-5-6.7-8.5-12.3-7c-4.8,1.3-9,7.2-7,12.3c15,37.9,39.9,70.5,72.9,94.5c32.9,24,72.9,37.4,113.5,39.1     c76.9,3.3,151.3-38.2,189.5-104.9c38.8-67.9,35.9-154.8-7.9-219.7c-43.9-64.9-122.1-100.9-200-90.7     C165.8,53.3,99.2,107.4,73.2,181.3c-3.2,9-5.6,18.2-7.5,27.6c-1.1,5.3,1.5,10.8,7,12.3C77.6,222.5,83.9,219.5,85,214.2L85,214.2z     " /></g></g><g><g><path d="M164,159.3c-28.1,13.3-56.2,26.5-84.2,39.8c-4,1.9-8.1,3.8-12.1,5.7c4.6,1.2,9.1,2.4,13.7,3.6     c-13.3-28.1-26.5-56.2-39.8-84.2c-1.9-4-3.8-8.1-5.7-12.1c-2.3-4.9-9.3-6.1-13.7-3.6c-5,2.9-5.9,8.8-3.6,13.7     c13.3,28.1,26.5,56.2,39.8,84.2c1.9,4,3.8,8.1,5.7,12.1c2.4,5.2,9.2,5.7,13.7,3.6c28.1-13.3,56.2-26.5,84.2-39.8     c4-1.9,8.1-3.8,12.1-5.7c4.9-2.3,6.1-9.3,3.6-13.7C174.8,157.9,168.9,157,164,159.3L164,159.3z" /></g></g><g><g><path d="M261.5,153c0,30.9,0,61.8,0,92.7c0,4.7,0.3,8.5,3.8,12.2c3.6,3.8,7.5,7.5,11.2,11.2c13.9,13.9,27.8,27.8,41.7,41.7     c10,10,20,20,30,30c9.1,9.1,23.3-5,14.1-14.1c-24.5-24.5-49-49-73.5-73.5c-3.4-3.4-6.9-6.9-10.3-10.3c1,2.4,2,4.7,2.9,7.1     c0-28.2,0-56.5,0-84.7c0-4.1,0-8.2,0-12.3C281.5,140.2,261.5,140.1,261.5,153L261.5,153z" /></g></g></g></svg></div> Reportes</Link>
					</li>
					<li><a href="http://credicooparequipa.pe/#/nuestros-pr%C3%A9stamos" target="_blank">
						<div class="svg-space"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 64 80" enableBackground="new 0 0 64 64" xmlSpace="preserve"><g><g><g><path d="M15.8,56.9H8.7c-0.6,0-1-0.4-1-1V24.6c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1v31.4C16.8,56.5,16.4,56.9,15.8,56.9z      M9.7,54.9h5.1V25.6H9.7V54.9z" /></g><g><path d="M44.8,57H26.9c-3.3,0-5.9-2.7-5.9-5.9V24.7c0-0.2,0.1-0.5,0.2-0.6L34,8.3c0.2-0.3,0.5-0.4,0.9-0.4C35,8,35,8,38.1,8.8     c2,0.5,3.3,2.5,2.9,4.6c-0.6,3.1-1.7,8-2.2,10.3l12,0c2.9,0,4.6,0.5,5.5,1.5c1,1.1,0.9,2.6,0.8,4c0,0.4-0.1,0.9-0.1,1.3v7.1     c0,0.2,0,0.3-0.1,0.5c-0.1,0.1-5.4,9.5-11.4,18.6C45.4,56.9,45.1,57,44.8,57z M23,25v26.1c0,2.2,1.8,3.9,3.9,3.9h17.3     c5.3-8.1,10.1-16.3,10.9-17.8v-6.8c0-0.5,0-1,0.1-1.4c0.1-1.2,0.1-2-0.3-2.5c-0.5-0.6-1.9-0.9-4.1-0.9l-0.4,0H37.6     c-0.3,0-0.6-0.1-0.8-0.4c-0.2-0.2-0.3-0.5-0.2-0.8c0-0.1,1.6-7.4,2.4-11.5c0.2-1-0.4-2-1.4-2.3c-0.9-0.2-1.9-0.5-2.5-0.6L23,25z" /></g></g></g></svg></div>Mas Informacion</a>
					</li>

					<li class="bottom"><a href="#">
						<div class="svg-space"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 64 80" enableBackground="new 0 0 64 64" xmlSpace="preserve"><g><g><g><path d="M35.9,57.1h-7.8l-0.6-6.6c-1.9-0.5-3.6-1.2-5.3-2.2L17,52.5L11.5,47l4.2-5.2c-1-1.6-1.7-3.4-2.2-5.3l-6.6-0.6v-7.8     l6.6-0.6c0.5-1.8,1.2-3.6,2.2-5.3L11.5,17l5.5-5.5l5.2,4.2c1.6-1,3.4-1.7,5.3-2.2l0.6-6.6h7.8l0.6,6.6c1.9,0.5,3.6,1.2,5.3,2.2     l5.2-4.2l5.5,5.5l-4.2,5.2c1,1.6,1.7,3.4,2.2,5.3l6.6,0.6v7.8l-6.6,0.6c-0.5,1.8-1.2,3.6-2.2,5.3l4.2,5.2L47,52.5l-5.2-4.2     c-1.6,1-3.4,1.7-5.3,2.2L35.9,57.1z M29.9,55.1h4.2l0.6-6.4h0.8c2.1-0.4,4-1.2,5.8-2.4l0.6-0.4l4.9,4l3-3l-4-4.9l0.4-0.6     c1.2-1.8,2-3.7,2.4-5.8v-0.8l0.9-0.1l5.5-0.5v-4.2l-6.4-0.6v-0.8c-0.4-2.1-1.2-4-2.4-5.8L45.8,22l4-4.9l-3-3l-4.9,4l-0.6-0.4     c-1.8-1.2-3.7-2-5.8-2.4h-0.8l-0.1-0.9l-0.5-5.5h-4.2l-0.6,6.4h-0.8c-2.1,0.4-4,1.2-5.8,2.4L22,18.2l-4.9-4l-3,3l4,4.9l-0.4,0.6     c-1.2,1.8-2,3.7-2.4,5.8v0.8l-0.9,0.1l-5.5,0.5v4.2l6.4,0.6v0.8c0.4,2.1,1.2,4,2.4,5.8l0.4,0.6l-4,4.9l3,3l4.9-4l0.6,0.4     c1.8,1.2,3.7,2,5.8,2.4h0.8l0.1,0.9L29.9,55.1z" /></g><g><path d="M32,43.9c-6.6,0-11.9-5.3-11.9-11.9S25.4,20.1,32,20.1S43.9,25.4,43.9,32S38.6,43.9,32,43.9z M32,22.1     c-5.5,0-9.9,4.4-9.9,9.9s4.4,9.9,9.9,9.9s9.9-4.4,9.9-9.9S37.5,22.1,32,22.1z" /></g></g></g></svg></div> Settings</a>
					</li>

				</ul>

			</nav>

			<div class="footer">
			
			</div>

		</header>

	);
}
export default Sidebar;