import './PageHome.scss'
import PageAdminGenric from './PageAdminGeneric';
const PageHome = () => {
		
	/* solo probando html */
	return (
		<PageAdminGenric  pageTitle="Home">
      <div className="page__home-container">
          <h1>Aqui van el home de admin</h1>
       </div>
		</PageAdminGenric>	
	);
}

export default PageHome;  
//reutilizar este componente