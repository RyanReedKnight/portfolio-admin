
class Photo {
    bytes;
    title;
    location;
    description;

    constructor(bytes,title,location,description) {
        this.bytes = bytes;
        this.title = title;
        this.location = location;
        this.description = description;
    }

}

export default Photo;