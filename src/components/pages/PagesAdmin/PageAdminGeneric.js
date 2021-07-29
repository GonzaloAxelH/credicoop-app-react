import Header from '../../templates/HeaderAdmin'
import Sidebar from '../../templates/SidebarAdmin'
import './PageAdminGeneric.scss';
const PageAdminGenric = ({children,pageTitle})=>{
	return (
		<>
		<Sidebar />
		 <div class="page">
			 <Header />
			<div class="content">
			<div class="title" id="title-bar">
				<div class="title__text">
				<span>Editing Content</span>
				<h1>{pageTitle}</h1>
				</div>
				<div class="title__extras">
				<svg class="lnr lnr-star icon"><use href="#lnr-star"></use></svg> Featured post
				</div>
			</div>
			<div class="content__main">
				{children}
			</div>  
			</div>
		</div>
		</>
		);
}

export default PageAdminGenric