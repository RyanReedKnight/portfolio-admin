import {useState, useEffect, useRef} from "react";
import axios from 'axios';
import Environment from "../../Environment";

const AdminMenu = ({isLogedIn, handleLoginChange}) => {

    const logout = () => {
        handleLoginChange(false);
    }

    return <section>
        <h1> WELCOME TO THE ADMIN MENU!!!!</h1>
        <button onClick={logout}>Logout</button>
    </section>
}

export default AdminMenu;