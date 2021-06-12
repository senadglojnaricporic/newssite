import React, {useState, useEffect} from 'react';

import API_KEY from '../apikey/ApiKey'
import ArticleList from '../article/ArticleList'

function Page(props) {

    const [data, setData] = useState([]);

    useEffect(() => {

        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.endpoint}`;
        let header = new Headers();
        header.append('x-api-key', API_KEY);

        fetch(url, {headers: header})
            .then(response => response.json())
            .then(json => json.articles)
            .then(data => setData(data))
            .then(() => document.documentElement.scrollTop = 0)
            .catch((err) => console.log(err));
        
    },[props.endpoint]);

    return (
        <ArticleList data = {data}/>
    );
}

export default Page;
