import React from 'react';

function ArticleText({item, styleItem}) {

    const styleHeader = {fontStyle: 'italic'};
    const styleFooter = {float: 'right'};

    return (
        <div style = {styleItem}>
            <p style = {styleHeader}>{item.source.name ? item.source.name : ''}</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p style = {styleFooter}>
                {item.author ? 'Author: ' + item.author : null} 
                <br></br>
                {item.publishedAt ? 'Published at: ' + item.publishedAt : null} 
            </p>
        </div>
    );

}

export default ArticleText;
