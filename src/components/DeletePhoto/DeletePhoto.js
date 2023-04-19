import ImageService from "../../services/ImageService";

const DeletePhoto = ({deletePhoto, authToken}) => {

    const formId = "delete-photo-form";
    const photoId = "photo-identifier";

    const imageService = new ImageService();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let photoToDelete = document.getElementById(photoId).value;
        try {
            let result = imageService.deletePhotoFromServer(photoToDelete,authToken);
            console.log(`result: ${result}`)
        } catch(err) {
            console.error(err);
        }
    }

    return (<>
        <form id={formId} onSubmit={handleSubmit} method="POST">
            <input type="text" name={photoId} id={photoId} />
            <button type="submit">Delete photo</button>
        </form>
    </>);
}

export default DeletePhoto;