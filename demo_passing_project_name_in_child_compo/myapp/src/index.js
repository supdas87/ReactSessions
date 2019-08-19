import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import ProjectList from "./components/ProjectList.js";



ReactDOM.render(< ProjectList/>, document.getElementById('root'));
serviceWorker.unregister();
