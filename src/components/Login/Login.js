import {useState, useEffect, useRef} from "react";
import axios from 'axios';
import Environment from "../../Environment";

const Login = ({token,handleTokenChange,isLogedIn,handleLoginChange}) => {

    const loginUrl = `${Environment.baseUrl}/admin/login`;

    const [username,setUsername] = useState({});
    const [password,setPassword] = useState({});


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(loginUrl,{
            username: username,
            password: password,
        }).then((resp) => {
            handleTokenChange(resp.headers.authorization);
            token && console.log("Recieved token");
            token && handleLoginChange(true);
        }).catch((err) => console.error(err));
    }

    return (
        <section>
            <h1>Admin signin</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange}/>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </section>
    );
}

export default Login;