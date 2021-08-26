import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'

// import CourseRegister from './components/CourseRegister'
// import OnlineProfile from "./components/OnlineProfile"
// import Join from "./components/Join"
// import Login from "./components/Login"
// import SchoolStatus from './components/SchoolStatus';
// import Home from './components/Home'
// import Nav from './components/Nav';

import styled from "styled-components";
import Header from "./Header";

import NavForJavaScript from './components/NavForJavaScript'
import Basic from './modern-javascript/01-basic/Basic'
import ArrowFn from './modern-javascript/02-arrow-fn/ArrowFn'
import Arguments from './modern-javascript/03-arguments/Arguments'
import TemplateLiteral from './modern-javascript/04-template-literal/TemplateLiteral'
import LiteralMethod from './modern-javascript/05-literal-method/LiteralMethod'
import Destructuring from './modern-javascript/06-destructuring/Destructuring'
import Loop from './modern-javascript/07-loop/Loop'
import ArrayMethod from './modern-javascript/08-array-method/ArrayMethod'
import SpreadOpRestParam from './modern-javascript/09-spread-operator-rest-param/SpreadOpRestParam'
import ObjLiteral from './modern-javascript/10-obj-literal/ObjLiteral'
import Symbol from './modern-javascript/11-symbol/Symbol'
import Class from './modern-javascript/12-class/Class'
import Promise from './modern-javascript/13-promise/Promise'
import Generator from './modern-javascript/14-generator/Generator'
import Proxy from './modern-javascript/15-proxy/Proxy'
import SetMap from './modern-javascript/16-set-map/SetMap'
import Array from './modern-javascript/17-array/Array'
import Es2017 from './modern-javascript/18-es2017/Es2017'
import AsyncAwait from './modern-javascript/19-async-await/AsyncAwait'
import Es2018 from './modern-javascript/20-es2018/Es2018'
import Es2019 from './modern-javascript/21-es2019/Es2019'
import Es2020 from './modern-javascript/22-es2020/Es2020'
import TypeScript from './modern-javascript/23-typescript/Typescript'



const App = () => (
<><Layout/><Header/>
<NavForJavaScript/>
<Switch>

{/* <Route exact path='/' component ={Home}/>
<Redirect from='/home' to={'/'}/>
<Route exact path='/join' component ={Join}/>
<Route exact path='/login' component ={Login}/>
<Route exact path='/schoolstatus' component ={SchoolStatus}/>
<Route exact path='/register' component ={CourseRegister}/>
<Route exact path='/profile' component ={OnlineProfile}/> */}

<Route exact path='/basic' component={Basic}/>
<Route exact path='/arrowfn' component={ArrowFn}/>
<Route exact path='/arguments' component={Arguments}/>
<Route exact path='/templit' component={TemplateLiteral}/>
<Route exact path='/litmethod' component={LiteralMethod}/>
<Route exact path='/destruct' component={Destructuring}/>
<Route exact path='/loop' component={Loop}/>
<Route exact path='/arrmethod' component={ArrayMethod}/>
<Route exact path='/spopretparam' component={SpreadOpRestParam}/>
<Route exact path='/objlit' component={ObjLiteral}/>
<Route exact path='/symbol' component={Symbol}/>
<Route exact path='/class' component={Class}/>
<Route exact path='/promise' component={Promise}/>
<Route exact path='/generator' component={Generator}/>
<Route exact path='/proxy' component={Proxy}/>
<Route exact path='/setmap' component={SetMap}/>
<Route exact path='/array' component={Array}/>
<Route exact path='/es2017' component={Es2017}/>
<Route exact path='/asyncawait' component={AsyncAwait}/>
<Route exact path='/es2018' component={Es2018}/>
<Route exact path='/es2019' component={Es2019}/>
<Route exact path='/es2020' component={Es2020}/>
<Route exact path='/typescript' component={TypeScript}/>


</Switch></>
)

const Layout =styled.div`
margin: 0 auto;
padding-left: 100px;
display: flex;
width:100%;
flex-flow:row wrap;
`


export default App
