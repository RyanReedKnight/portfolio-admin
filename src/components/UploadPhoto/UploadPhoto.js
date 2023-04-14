import React, {useState} from "react";
// Services
import ImageService from "../../services/ImageService";

const UploadPhoto = ({uploadPhoto, toggleUploadPhoto, authToken}) => {

    console.log(`Upload photo authToken: ${authToken}`);

    // State hooks
    const [msg, setMsg] = useState('');
    const [photo,setPhoto] = useState({});

   // const imageService = new ImageService();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        const imageService = new ImageService();
        
        try {
            let result = imageService.postImageToServer(photo,authToken)
            setMsg(() => result );
        } catch(err) {
            console.error(err);
        }
    }

    // Change photo files
    const handleByteChange = (event) => {
        setPhoto((prevState) => ({...prevState,bytes:event.target.files[0]}));
    }
    const handleTitleChange = (event) => {
        setPhoto((prevState) => ({...prevState,title:event.target.value}))
    }
    const handleLocationChange = (event) => {
        setPhoto((prevState) => ({...prevState,location: event.target.value}))
    }
    const handleDescriptionChange = (event) => {
        setPhoto((prevState) => ({...prevState, description: event.target.value}))
    }

    return ( <>
        <form onSubmit={handleSubmit}>
            <input type="file" id="bytes" name="bytes" onChange= {(event) => handleByteChange(event)}/>
            <label htmlFor="title"/>
            <input type="text" id="title" name="title" onChange= {(event) => handleTitleChange(event)}/>
            <label htmlFor="location" />
            <input type="text" id="location" name="location" onChange= {(event) => handleLocationChange(event)}/>
            <label htmlFor="description" />
            <input type="text" id="description" name="description" onChange= {(event) => handleDescriptionChange(event)}/>
            <button type="submit">Upload</button>
        </form>
        <button>Back to admin menu</button>
        {msg && (<div>
            <p>{msg}</p>
        </div>)}
        <button onClick={toggleUploadPhoto}>Close</button>
    </> );
}

export default UploadPhoto;