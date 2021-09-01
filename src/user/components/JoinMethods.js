import React from 'react'

const JoinMethods = () => {
    return(
        <div>
        <h1>가입하시죠!</h1>
        <ul>
            <li>
                <a href={RegisterDirect} target="_blank" id="register" name="RegisterDirect" onclick={RegisterDirect}>직접 입력</a></li>
            <li>
                인증서 가입</li>
            <li>소셜 로그인</li>
            <li>구글 로그인</li>
        </ul>
        </div>
    )

}
export default JoinMethods