import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
// import DateMonth from 'components/DateMonth'
// import MedPoint from 'cofin/MedPoint'
// import News from 'news/pages/News'
// import Tags from 'cofin/Tags'
// import MedPoint from 'medPoint/pages/MedPoint'
import Login from 'user/pages/Login'
// import UserLost from 'user/components/UserLost'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Login />
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
