
import "./PageLogin.css";
import Pig from '../../atoms/svgs/pig.svg'
import Form from './SignupForm.js'
import Icon from '../../atoms/svgs/icon.svg'
function PageLogin() {
  return (
      <div className="container">
            <div className="container__information">
              <div className="container__info-image">
                <img src={Pig} alt=""/>
              </div>
              <div className="container__info-title">
                <h3> Abre tu cuenta FREE hoy </h3>
              </div>
              <div className="container__info-punto">
                <img src={Icon}/>

                <div className="container_info-punto-d">
                  <span>Sin pago de mantenimiento ni comisiones</span>
                  <p>En la red de 950 cajeros y 13,100 agentes Scotiabank.</p>
                </div>
              </div>

              <div className="container__info-punto">
                <img src={Icon}/>

                <div className="container_info-punto-d">
                  <span>Sin costo por operaciones en todo el Perú</span>
                  <p>En nuestra red a nivel nacional.</p>
                </div>
              </div>

               <div className="container__info-punto">
                <img src={Icon}/>

                <div className="container_info-punto-d">
                  <span>Sin costo por retiros en todo el Perú</span>
                  <p>Desde nuestra app, web, cajeros o ventanillas.</p>
                </div>
              </div>

             <div className="container__info-punto">
                <img src={Icon}/>

                <div className="container_info-punto-d">
                  <span>La única cuenta en el Perú que #NoCobraNada</span>
                  <p>En nuestra red a nivel nacional.</p>
                </div>
              </div>
                   
            
          
              <div className="container__info-button-plus">
                <a href="http://credicooparequipa.pe/#/"><button>Mas Informacion</button></a>
              </div>


     <div className="container__info-aviso-content">
            <img  src={Icon}/>
            <p>El beneficio de #NoCobraNada corresponde solo a las operaciones realizadas con Cuenta Free en los canales Scotiabank a nivel nacional.</p>
          </div>


            </div>
            <div className="container__formulario">
                <Form />
                <div className="container__form-options">

                </div>
					
             </div>
      </div>
    );
}
export default PageLogin;