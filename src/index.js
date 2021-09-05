import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

// import News from 'news/pages/News'
// import NewsSearch from 'news/components/NewsSearch'
// import NewsDate from 'news/components/NewsDate'
// import NewsType from 'news/components/NewsType'
// import NewsTags from 'news/components/NewsTags'

// import MessagePage from 'message/pages/MessagePage'
// import MessageSearch from 'message/components/MessageSearch'
// import MessageDate from 'message/components/MessageDate'
// import MessageType from 'message/components/MessageType'

import MedPoint from 'medPoint/pages/MedPoint'

// import Login from 'user/pages/Login'
// import UserLost from 'user/components/UserLost'
// import Unregister from 'user/components/Unregister'
// import RegisterForm from 'user/components/RegisterForm'
// import AppAlert from 'user/components/AppAlert'




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <MedPoint />
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
