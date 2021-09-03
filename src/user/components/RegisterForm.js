import React from 'react'

const RegisterForm = () => {
    return(
    <div>
    <h1>직접 입력</h1>
        <form>
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
                        Sex: *DROPDOWNLIST*
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
                    <input type="submit" value="회원가입" />
                    <input type="submit" value="Reset" />
            </ul>
        </form>
    </div>
    )}
export default RegisterForm