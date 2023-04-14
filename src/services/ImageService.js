import React from 'react';
import Environment from '../Environment'
import axios from 'axios';
import Photo from '../models/photo';

class ImageService {

    url = `${Environment.baseUrl}/photos`;
    postImageToServer = (photo, authToken) => {
        const bytes = window.btoa(photo.bytes);
        axios.post(this.url, JSON.stringify({...photo,bytes: bytes}) ,
            {
                headers: {
                Authorization: `${authToken}`,
                'Content-Type': 'application/json'
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