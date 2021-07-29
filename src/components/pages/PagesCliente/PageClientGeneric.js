import Header from '../../templates/Header'
import Sidebar from '../../templates/Sidebar'
import './PageClientGeneric.scss';
const PageClientGenric = ({children})=>{
	return (
		<>
		<div className="pagehome">
			<Sidebar />	
			<div class="body-wrapper row">	
				<div class="content-wrapper">
					<Header/>		
					<main style={{marginTop:'5em'}}>
						{children}
					</main>
				</div>
			</div>
		</div>
		</>
		);
}

export default PageClientGenric