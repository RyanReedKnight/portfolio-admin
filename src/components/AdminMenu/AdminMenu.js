import {useState, useEffect, useRef} from "react";
import UploadPhoto from "../UploadPhoto/UploadPhoto";
import DeletePhoto from "../DeletePhoto/DeletePhoto";

const AdminMenu = ({isLogedIn, handleLoginChange,authToken}) => {
    const [loadUploadPhoto,setLoadUploadPhoto] = useState(false);
    const [loadDeletePhoto,setLoadDeletePhoto] = useState(false);

    const toggleUploadPhoto = () => {
        setLoadUploadPhoto((prev)=>!prev);
    }
    const toggleDeletePhoto = () => {
        setLoadDeletePhoto((prev) =>!prev);
    }

    const logout = () => {
        handleLoginChange(false);
    }

    return <section>
        {!loadUploadPhoto && <button onClick={toggleUploadPhoto}>Upload Photo</button>}
        {loadUploadPhoto && <UploadPhoto uploadPhoto={loadUploadPhoto} toggleUploadPhoto={toggleUploadPhoto} authToken={authToken}/>}
        {!loadDeletePhoto && <button onClick={toggleDeletePhoto}>Delete Photo</button>}
        {loadDeletePhoto && <DeletePhoto deletePhoto={loadDeletePhoto} authToken={authToken}/>}
        <button onClick={logout}>Logout</button>
    </section>
}

export default AdminMenu;