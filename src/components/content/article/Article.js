import React from 'react';

import Image from './Image'
import ArticleText from './ArticleText'

function Article({item, index}) {

    const styleList = {listStyleType: 'none', marginTop: '1em', backgroundColor: 'papayawhip', boxShadow: '5px 5px 10px grey'};
    const styleLink = {textDecoration: 'none'};
    const styleContainerWithImage = {display: 'flex', justifyContent: 'start', alignItems: 'center'}
    const styleContainerNoImage = {display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}
    const styleItem = {margin: '2em'}

    const articleStyle = item.urlToImage ? styleContainerWithImage : styleContainerNoImage;

    return (
        <li style={styleList} key = {index}>
            <a style = {styleLink} href = {item.url}>
                <div style = {articleStyle}>
                    <Image styleItem = {styleItem} urlToImage = {item.urlToImage}/>
                    <ArticleText item = {item} styleItem = {styleItem}/>
                </div>
            </a>
        </li>
    );
}

export default Article;
