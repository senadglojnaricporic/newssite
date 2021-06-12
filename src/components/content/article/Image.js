import React from 'react';

function Image({urlToImage, styleItem}) {

    const styleImage = {width: '20em', objectFit: 'cover'}

    const imageBlock = urlToImage ? styleItem : {display: 'none'};
    
    return (
        <div style = {imageBlock}>
            <img style = {styleImage} alt = '' src = {urlToImage}/>
        </div>
    );
}

export default Image;
