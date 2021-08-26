import React from 'react'
import NavForJavaScript from '../components/NavForJavaScript'
import Login from '../components/Login'
import img from '../images/beecat.jpg'
import {Route} from 'react-router-dom'

const HomePage = () => {
    return (<>
    <div style={style}>
    <table style={{width:"1200px", height:"800px", margin:"0 auto", alignItems:'center center'}}>
        <tr style={{width:"100%", height:"15%"}}>
            <td style={{width:"20%"}}><img src={img} width="100%" Route path='/HomePage' component={HomePage} /></td>
            <td style={{alignContent:"center"}}><h1>Welcome</h1></td>
            <td style={{width:"20%"}}>Date</td>
        </tr>
        <tr style={{width:"100%", height:"75%"}}>
            <td style={{width:"20%"}}><h3>Menu</h3><hr/><NavForJavaScript/></td>
            <td style={{alignContent:"center", backgroundColor:"#fff"}}>Make things show up here</td>
            <td style={{width:"20%", align:"top"}}><Login/></td>
        </tr>
        <tr style={{width:"100%", height:"10%"}}>
            <td style={{width:"20%"}}></td>
            <td style={{alignContent:"center"}}>Contacts | Privacy Policy | ETC</td>
            <td style={{width:"20%"}}>Family Site List</td>
        </tr>
    </table></div>

    </>)
}
const style={
    backgroundColor: 'beige'
}

export default HomePage