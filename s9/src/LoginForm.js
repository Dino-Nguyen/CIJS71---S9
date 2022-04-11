import {userContext} from 'react'
import LoginContext from './LoginContext';
function LoginForm() {
    const loginCtx = userContext(LoginContext)
    const onSelect = (event) => {
		loginCtx.setUser(event.target.value)
	}

    return (
      <div >
       <div>Login</div>
       <div>
           <input placeHolder="username..." />
           <button value={input.value}>Login</button>
       </div>
      </div>
    );
  }
  
  export default LoginForm;