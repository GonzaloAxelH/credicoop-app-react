import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './data/store'
import {Provider} from 'react-redux'
import {loadAdminById,loadClienteId,loadReportesId,loadCajeros,loadAnalistas,loadGestores,loadClientes } from './data/actionCreators'


const Init = ({children}) => {
  useEffect(()=>{
        store.dispatch(loadCajeros())
        store.dispatch(loadAnalistas())
        store.dispatch(loadGestores())
        store.dispatch(loadClientes())
        store.dispatch(loadClienteId());
        store.dispatch(loadAdminById());    
        store.dispatch(loadReportesId());
        store.dispatch(loadClientes())
  store.subscribe(()=>{
    
        store.dispatch(loadClienteId());

    })
  },[])
  return  <>{children}</>

}

ReactDOM.render(
  <Provider store={store}>  
        <Init>
          <App />
        </Init>
      </Provider>,    
  document.getElementById('root')
);

