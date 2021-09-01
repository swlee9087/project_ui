import React from 'react'
import UserInfo from '../components/UserInfo';

const Login = () => (
<>
<div>
    <h1>로그인</h1>
<form>
        <ul>
            <li>                
                <label for="id">아이디</label>                
                <input type="text" id="id" />
            </li>
            <li>
                <label for="pw">비밀번호</label>
                <input type="password" id="pw" />
                {/* separate instance where input is wrong */}
                <Wrong/>
            </li>
                <input type="submit" title="로그인" value="로그인" />            
                <input type="submit" title="인증서 로그인" value="인증서 로그인" />            
                <input type="submit" title="ID/PW 찾기" value="ID/PW 찾기" />            
        </ul>
    </form>
</div>
</>
)
export default Login;

const Wrong = () => (<>
    return (){
    console.log("입력하신 정보가 존재하지 않습니다")
    }
</>)