import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import AdminMenu from './components/AdminMenu/AdminMenu'
import React from 'react'; 

function App() {

  const [token,setToken] = React.useState('');
  const [isLogedIn,setIsLogedIn] = React.useState(false);

  const handleTokenChange = (newToken) => {
    setToken(()=>newToken);
    token && console.log(`Token set.`);
  }

  const handleLoginChange = (newLoginStatus) => {
    setIsLogedIn(()=>newLoginStatus);
    !isLogedIn && handleTokenChange('');
  }

  React.useEffect(()=>{
    console.log(`isLogedIn: ${isLogedIn}Z`);
  },[isLogedIn]);

  return (
    <div className="App">
      {!isLogedIn && <Login
        token={token}
        handleTokenChange={handleTokenChange}
        isLogedIn={isLogedIn}
        handleLoginChange={handleLoginChange}
      />}

      {isLogedIn && <AdminMenu
        isLogedIn={isLogedIn}
        handleLoginChange={handleLoginChange}
      />}
    </div>
  );
}

export default App;