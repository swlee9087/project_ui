import React from 'react'
import logo from '../images/first.jpg'
import Nav from './Nav'

const Home =() => (
<div>
  <Nav/>
       <h1>시간이란...</h1>
        <p>내일 죽을 것처럼 오늘을 살고
            영원히 살 것처럼 내일을 꿈꾸어라.
        </p>        
      <img src={logo}/>
    </div>
)
export default Home