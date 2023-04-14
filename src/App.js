import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import AdminMenu from './components/AdminMenu/AdminMenu'
import React from 'react'; 

function App() {

  const getRenderCondition = () => {
    return isLogedIn && token && token !='';
  }

  const [token,setToken] = React.useState('');
  const [isLogedIn,setIsLogedIn] = React.useState(false);

  const handleTokenChange = (newToken) => {
    setToken(()=>newToken);
    token && console.log(`Token set. ${token}`);
  }

  //React.useEffect();

  const handleLoginChange = (newLoginStatus) => {
    setIsLogedIn(()=>newLoginStatus);
    !isLogedIn && handleTokenChange('');
  }

  React.useEffect(()=>{
    console.log(`isLogedIn: ${isLogedIn}`);
  },[isLogedIn]);

  return (
    <div className="App">
      {(!isLogedIn || !token || token===``) && <Login
        token={token}
        handleTokenChange={handleTokenChange}
        isLogedIn={isLogedIn}
        handleLoginChange={handleLoginChange}
      />}

      {getRenderCondition() && <AdminMenu
        isLogedIn={isLogedIn}
        handleLoginChange={handleLoginChange}
        authToken={token}
      />}
    </div>
  );
}

export default App;