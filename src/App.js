import React from 'react';
import {BrowserRouter as Redirect, Route, Router, Switch} from 'react-router-dom'
import CourseRegister from './components/CourseRegister'
import OnlineProfile from "./components/OnlineProfile"
import Join from "./components/Join"
import Login from "./components/Login"
import SchoolStatus from './components/SchoolStatus';
import Home from './components/Home'
import Nav from './components/Nav';

const App = () => (
<><Router><Nav/>
<Switch>
<Route exact path='/' component ={Home}/>
<Redirect from='/home' to {'./home'}/>
<Route exact path='/join' component ={Join}/>
<Route exact path='/login' component ={Login}/>
<Route exact path='/schoolstatus' component ={SchoolStatus}/>
<Route exact path='/register' component ={CourseRegister}/>
<Route exact path='/profile' component ={OnlineProfile}/>
</Switch></Router></>
)
export default App
