import Card from "./card"
import { useState } from "react"

export default function Cards() {
    const [ids, setIds] = useState(
        [
            "6160",
            "5986",
            "4789",
            "6768",
            "7473", 
            "4746",
            "5516",
            "5582", 
            "6108",
            "5963",
            "5964",
            "5552",
            "6326",
            "2467",
            "787",
            "3272",
            "6856",
            "5568",
            "7150",
            "1150"
        ]
    )

    function shuffle(array) {
        let shuffledArray = [];
        let usedIndexes = [];

        for (let i = 0; i < array.length; i++) {
            function randomizeArray() {
                let randomNumber = Math.floor(Math.random() * array.length);
                if (!usedIndexes.includes(randomNumber)) {
                    shuffledArray.push(array[randomNumber]);
                    usedIndexes.push(randomNumber);
                } else {
                    randomizeArray();
                }
            }

            randomizeArray();
        }

        console.log(shuffledArray);
            
        return shuffledArray;
    };

    function handleClick() {
        const newIds = shuffle(ids);
        setIds(newIds);
    }


    const cards = ids.map(id => 
        <Card 
            id = {id} 
            key = {id}
            clickHandler = {handleClick}
        />)

    return (
        <div 
            className = "game"
        >
            {cards}
        </div>
    )
}