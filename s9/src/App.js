import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import './App.css';
import LoginContext from './LoginContext';
import {useState, useContext} from 'react'
import LanguageContext from './LanguageContext'
function App() {
  
 const [langua, setLangua] = useState('')
  const value2 = useContext(LanguageContext)
  let set = 'Login'
  if (value2.langua === 'vi') {
    set = 'Đăng Nhập'
  }
  const [user, setUser] = useState(set)
  return (
    <LoginContext.Provider value={{user: user, setUser: setUser}}>
     <LanguageContext.Provider value={{langua: langua, setLangua: setLangua}}>
    <div className="App">
     <Header />
     <Body />
     <Footer />
    </div>
    </LanguageContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
