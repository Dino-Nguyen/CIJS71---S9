import LoginContext from "./LoginContext";
import { useContext} from 'react'

function Header() {
  const value = useContext(LoginContext)
  return (
    <div className="header">
     <div className="logo">MindX</div>
     <div className="login">{value.user}</div>
    </div> 
  );
}

export default Header;