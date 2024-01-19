import { createApi } from "unsplash-js"
import { useState, useEffect } from "react";

export default function Card({id}) {
    const [url, setUrl] = useState('');

    const firstHalf = 'https://api.disneyapi.dev/character/';

    let characterInfo = firstHalf.concat(id);
    
    useEffect(() => {
        fetch(characterInfo, {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                const link = `${response.data.imageUrl}`;
                setUrl(link);
            });
    }, []);

    return (
            <img src={url}></img>
    )
}