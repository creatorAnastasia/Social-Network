import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

let renderAll = (state) => {
ReactDOM.render(
 <BrowserRouter>
    <App appState={state} 
         dispatch={store.dispatch.bind(store)}
         store = {store}  />
 </BrowserRouter>,document.getElementById('root')
);
}
renderAll(store.getState());
store.subscribe(()=>{
        let state= store.getState()
        renderAll(state)
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
