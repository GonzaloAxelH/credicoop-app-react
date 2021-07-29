import './Header.scss'
import { Link} from 'react-router-dom'
const Header = ()=>{
	return (
		
					<header class="top-header">

						<div class="menu-btn toggle-btn">
							<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enableBackground="new 0 0 100 100" xmlSpace="preserve"><g><g><path d="M4.667,82.982H95v-6.018H4.667V82.982z M4.667,52.895H95v-6.018H4.667V52.895z M4.667,19.798v6.018H95v-6.018H4.667z" /></g></g></svg>
						</div>

						<nav class="navbar-top">
							<ul>
								<li><Link to="/app/logout" class="sp-btn" style={{color:"#fff"}}>Cerrar Session</Link></li>
								
							</ul>

						</nav>
					</header>
	);
}

export default Header;