import React from 'react';
import Environment from '../Environment'
import axios from 'axios';
import Photo from '../models/photo';

class ImageService {

    url = `${Environment.baseUrl}/photos`;
    postImageToServer = (formData, authToken) => {
        axios.post(this.url, formData,
            {
                headers: {
                Authorization: `${authToken}`,
                'Content-Type': 'multipart/form-data'
            }}
        ).then(res => {
            console.log(res);
            return res;
        }).catch(err => {
            console.error(err);
        })
    };
}
export default ImageService;