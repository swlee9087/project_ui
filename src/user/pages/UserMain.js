import React from 'react'
import RegisterDirect from '../components/RegisterDirect'
// import AppAlert from '../components/AppAlert'
// import Login from './Login'
import Unregister from '../components/Unregister'
import UserInfo from '../components/UserInfo'
import JoinMethods from '../components/JoinMethods'

const UserMain = () => {
    return(
        // <Login/>
        <JoinMethods/>
        <RegisterDirect/>
        <UserInfo/>
        <Unregister/>
        )
}
export default UserMain


    