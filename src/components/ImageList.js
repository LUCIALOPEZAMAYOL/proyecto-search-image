import React from "react";
import '../style/ImagesList.css'

const ImageList = ({images}) => {
    console.log(images);

    const listImages = images.map((image) => {
        return (
            <div className="card" key={image.id}>
                <div className="image">
                    <img src={image.webformatURL} alt='img' />
                </div>
            </div>          
        );
    });
    return listImages;
};

export default ImageList;
