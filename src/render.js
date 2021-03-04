import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { addPost,updateNewPostText } from './redux/state';

export let renderAll = (state) => {
ReactDOM.render(
 <BrowserRouter>
    <App appState={state} 
         addPost={addPost}  
         updateNewPostText={updateNewPostText} />
 </BrowserRouter>,document.getElementById('root')
);
}


