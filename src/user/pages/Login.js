import React from 'react'
import UserInfo from '../components/UserInfo';
import styled from 'styled-components'
import RegisterForm from 'user/components/RegisterForm';
import UserLost from 'user/components/UserLost';

const Login = () => (
<div class="login">
    <h1>로그인</h1>
    <form style={{width:"100%"}}>
                        
                <label class="user_id" title="user_id">                
                <input id="user_id" name="user_id" fw-filter="isFill" fw-label="아이디" fw-msg class="inputTypeText" placeholder="아이디" type="text"/>
                </label><br/><br/>
                <label class="user_pw" title="user_pw">
                <input id="user_pw" name="user_pw" fw-filter="iSFill" fw-label="패스워드" fw-msg autocomplete="off" placeholder="비밀번호" type="password"/></label><br/><br/>
                {/* separate instance where input is wrong */}
                {/* <Wrong/> */}                
                <a href="#" onclick="UserAction.login(''); return false;" ><input type="submit" title="로그인" value="로그인" /></a>
                <br/><br/>
                <a href={UserLost} onclick="UserAction.open('UserLost'); return false;"><input type="button" title="ID/PW 찾기" value="ID/PW 찾기" /></a><br/>            
    </form>
    <br/>
<div>
    <a href={RegisterForm}><input type="button" title="회원 가입" value="회원 가입" /></a><br/><br/>
     
    <input type="submit" title="인증서 가입" value="인증서 가입"/><br/><br/>
    <input type="button" title="인증서 로그인" value="인증서 로그인" /><br/><br/>
    <a href="#" onclick="UserAction.snsLogin('naver','%2F')">
        <img src="http://img.echosting.cafe24.com/skin/base_ko_KR/member/btn_naver_login.gif" alt="네이버 로그인"/></a><br/><br/>
    {/* input type="button" title="SNS 로그인" value="네이버 로그인"  */}
    <a href="#" onclick="UserAction.snsLogin('kakao','%2F')">
        <img src="https://img.echosting.cafe24.com/skin/base_ko_KR/member/btn_kakao_login.gif" alt="카카오 로그인"/></a><br/><br/>
    {/* <input type="button" title="SNS 로그인" value="카카오 로그인" /> */}
    <a href="#" onclick="UserAction.snsLogin('facebook','%2F')">
        <img src="https://img.echosting.cafe24.com/skin/base_ko_KR/member/btn_facebook_login.gif" alt="페이스북 로그인"/></a><br/><br/>
    <a href="#" onclick="UserAction.snsLogin('google','%2F')">
        <img src="https://img.echosting.cafe24.com/skin/base_ko_KR/member/btn_google_login.gif" alt="구글 로그인"/></a><br/><br/>
    <br/><br/>
</div>
</div>

)
export default Login;

const Wrong = () => {
    return (
    console.log("입력하신 정보가 존재하지 않습니다")
    )}

