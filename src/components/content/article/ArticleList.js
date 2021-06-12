import React from 'react';

import Article from './Article';

function ArticleList({data}) {

    const styleUL = {margin: '0 0 1em 0', padding: '0', position: 'relative', top: '5em'};

    return (
        <ul style = {styleUL}>
            {data.map((item, index) => {
                return (
                    <Article key = {index} item = {item} index = {index}/>
                );
            })}
        </ul>
    );
}

export default ArticleList;
