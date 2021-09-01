import React from 'react'
import Unregister from './Unregister'

const UserInfo = () => (
<div>
    <h1>개인 정보</h1>
<form onSubmit={this.formSubmit}>
        <ul>
            <li>
                <label>
                    아이디: <input type="text" id="user_id" size="20" minlength="4" maxlength="15"/>                
                    </label></li>
                <small> 4~15자리 이내의 영문과 숫자</small>            
            <li>
                <label>
                    비밀번호: <input type="password" id="user_pwd" />
                </label></li>            
            <li>
                <label>
                    비밀번호 확인: <input type="password" id="check_pwd" />
                </label></li>
                <li>            
                <label>
                    이름: <input type="text" id="user_name" />
                </label></li>
                <li>            
                <label>
                    생년월일: <input type="date" id="user_birth" />
                </label></li>
                <li>            
                <label>
                    Sex: 
                    <input type="radio" value="Male" checked={this.state.selectedOption ==="Male"} onChange={this.onValueChange}/>Male
                </label></li>
                <li>            
                <label>
                    연락처: <input type="text" id="user_phone" />
                </label></li>
                <li>            
                <label>
                    이메일: <input type="email" id="user_email" />
                </label></li>
                <li>            
                <label>
                    주소: <input type="text" id="user_address" />
                </label></li>
                <input type="submit" value="변경완료" />
                <input type="exit" value="취소" />
                <input type="submit" value="탈퇴" linkto={Unregister}/>
        </ul>
    </form>
</div>
)
export default UserInfo