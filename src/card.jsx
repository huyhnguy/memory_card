import { useState, useEffect } from "react";

function Image({ id }) {
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
        <img src={url}>
        </img>
    )
}

function Name({ id }) {
    const [name, setName] = useState('');

    const firstHalf = 'https://api.disneyapi.dev/character/';
    let characterInfo = firstHalf.concat(id);

    useEffect(() => {
        fetch(characterInfo, {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                setName(response.data.name);
            });
    }, []);

    return (
        <h2>{name}</h2>
    )
}

export default function Card ({ id, clickHandler }) {
    return (
        <div 
            className = "card"
            onClick = {clickHandler}
        >
            <Image id = {id} />
            <Name id = {id} />
        </div>
    )
}

/*export default function Card({id}) {
    const [url, setUrl] = useState('');
    const [name, setName] = useState('');

    const firstHalf = 'https://api.disneyapi.dev/character/';

    let characterInfo = firstHalf.concat(id);
    
    useEffect(() => {
        fetch(characterInfo, {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                const link = `${response.data.imageUrl}`;
                console.log(response);
                setUrl(link);
                setName(response.data.name);
            });
    }, []);

    return (
        <>
            <img src={url}></img>
            <h2>{name}</h2>
        </>
           
    )
}*/