import {useContext, useState} from 'react'
import LoginContext from './LoginContext';
import LanguageContext from "./LanguageContext.js"
const LoginForm = () => {
  const loginCtx = useContext(LoginContext)
 const [changeValue, setChangeValue] = useState('')
 const setValue = (e) => {
   setChangeValue(e.target.value)
 }
 const value2 = useContext(LanguageContext)
 let placeHold = 'username...'
 let loginSubmit = 'Login'
 let loginTitle = 'LOGIN'
 if (value2.langua === 'vi') {
   placeHold = 'tên người dùng...'
   loginSubmit = 'Đăng nhập'
   loginTitle = 'ĐĂNG NHẬP'
 }
	 const changeInput = () => {
  setChangeValue(loginCtx.setUser)
  document.getElementById('formLogin').innerHTML=''
  if (value2.langua ==='vi') {
    document.getElementById('formLogin').innerHTML += `
  <div>Đăng nhập thành công</div>
  <div id="wel">Chào mừng bạn, `+changeValue+` !</div>
  `
  }
  else if (value2.langua !='vi') {
  document.getElementById('formLogin').innerHTML += `
  <div>Log in success</div>
  <div id="wel">Welcome `+changeValue+` !</div>
  `}
  }
return (
  <div id="formLogin">
      <div className='LoginCon'>
         <div className='title'>{loginTitle}</div>
         <div className='submit'>
           <input className='inputText' placeholder={placeHold}
           value={changeValue} onChange={setValue}
           />
           <button className='loginBtn' onClick={changeInput}>{loginSubmit}</button>
          </div>
      </div>
      </div>
    )
  
}
  export default LoginForm;