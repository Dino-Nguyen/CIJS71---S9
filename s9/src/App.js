import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import './App.css';
import LoginContext from './LoginContext';
import {useState} from 'react'

function App() {
  const [user, setUser] = useState({user : ''})
  return (
    <LoginContext.Provider value={{user: user, setUser: setUser}}>
    <div className="App">
     <Header />
     <Body />
     <Footer />
    </div>
    </LoginContext.Provider>
  );
}

export default App;
