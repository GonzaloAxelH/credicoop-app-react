

import React,{useState} from 'react';
 import { useFormik } from 'formik';
 import { login, register, logout } from "../../../utils/JWTAuth"
 import './Form.css'
 // A custom validation function. This must return an object
 // which keys are symmetrical to our values/initialValues
 const validate = values => {

  var valoresAceptados = /^[0-9]+$/;
  const errors = {};
   if (!values.codigo) {
     errors.codigo = 'Required';
   } else if (values.codigo.length > 10){
     errors.codigo = 'Sobrepasa el codigo';
   } else if( values.codigo.length < 10 && values.length > 0){

     errors.codigo = 'Falta dijitos del codigo';
   }else if (!values.codigo.match(valoresAceptados)){
       errors.codigo = "Solo datos numericos";
   }
   if (!values.password) {
     errors.password = 'Required';
   }
    return errors;
 };
 

 const SignupForm = () => {
 
 
 const [windowEmergent,setWindowEmergent] =useState(false);
  const formik = useFormik({
     initialValues: {
       codigo: '',
       password: '',
     },
     validate,
     onSubmit: values => {      
        login(values);     
      },
   });

   return (
     <>
     { windowEmergent ? 
        <div>Usuario o contraseña incorrectos</div> :
          ""
     }
     <div className="container__info-form">
       <h1 className="container__form-title">Ingresa tus datos aquí</h1>
       <p className="container__form-subtitle">
         Para abrir tu cuenta, debes tener nacionalidad peruana y 18 años o más.
       </p>
     <form onSubmit={formik.handleSubmit} className="container__form">
       <div className={formik.errors.codigo ? "container__form-control active" : "container__form-control"} >
          <label htmlFor="codigo">Codigo</label><br/>
          <input
            id="codigo"
            name="codigo"					
            type="text"
            onChange={formik.handleChange}
            value={formik.values.codigo}	
          />
          {formik.errors.codigo ? <div className="form__message-error">{formik.errors.codigo}</div> : null}
       </div>
       <div className="container__form-control">
       <label htmlFor="password">Contraseña</label><br/>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
       {formik.errors.password ? <div className="form__message-error">{formik.errors.password}</div> : null}
      </div> 
       <button  className="container__form-button" type="submit">Submit</button>
     </form>
   </div>
    </>
   );
 };

 export default SignupForm;