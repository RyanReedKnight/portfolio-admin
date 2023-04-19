import React from 'react';
import Environment from '../Environment'
import axios from 'axios';
import Photo from '../models/photo';

class ImageService {
    
    url = `${Environment.baseUrl}/photos`;
    postImageToServer = (formData, authToken) => {

        let ret ="";

        axios.post(this.url, formData,
            {
                headers: {
                Authorization: `${authToken}`,
                'Content-Type': 'multipart/form-data'
            }}
        ).then(res => {
            console.log(res);
            ret = res.data;
        }).catch(err => {
            console.error(err);
            ret = err.data;
        })

        return ret;
    };

    deletePhotoFromServer = (photoIdentifier,authToken) => {

        let ret = "";

        axios.delete(`${this.url}/delete/${photoIdentifier}`,
            {headers: {
                Authorization: `${authToken}`,
                'Content-Type': 'application/json'
            }}
        ).then(res => {
            console.log(res);
            ret = res;

        }).catch(err => {
            console.error(err);
            ret = err.data;
        })
        return ret;
    }
}
export default ImageService;