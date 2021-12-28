import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from "./components/navbar/navbar";
import reportWebVitals from './reportWebVitals';

/* App is purely to render the structure ONLY*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* Renders the navigation bar*/
ReactDOM.render(<Navbar />, document.getElementById("navbar-top"))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
