import {useState, useEffect, useRef} from "react";
import axios from 'axios';
import Environment from "../../Environment";
import UploadPhoto from "../UploadPhoto/UploadPhoto";

const AdminMenu = ({isLogedIn, handleLoginChange,authToken}) => {

    console.log(`Admin menu Token ${authToken}`)

    const [loadUploadPhoto,setLoadUploadPhoto] = useState(false);

    const toggleUploadPhoto = () => {
        setLoadUploadPhoto((prev)=>!prev);
    }

    const logout = () => {
        handleLoginChange(false);
    }

    return <section>
        {!loadUploadPhoto && <button onClick={toggleUploadPhoto}>Upload Photo</button>}
        {loadUploadPhoto && <UploadPhoto uploadPhoto={loadUploadPhoto} toggleUploadPhoto={toggleUploadPhoto} authToken={authToken}/>}
        <button onClick={logout}>Logout</button>
    </section>
}

export default AdminMenu;