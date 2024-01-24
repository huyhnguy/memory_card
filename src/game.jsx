import Card from "./card"
import { useState } from "react"

function Score({ score }) {

    return (
        <h3>Score:{score}</h3>
    )
}

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
    const [clickedCards, setClickedCards] = useState([]);


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

        return shuffledArray;
    };

    function addClickedCards(id) {
        if (!clickedCards.includes(id)) {
            const newClickedCards = clickedCards;
            newClickedCards.push(id);
            setClickedCards(newClickedCards);
        } else {
            setClickedCards([]);
        }
        
    }

    function handleClick(event) {

        const newIds = shuffle(ids);
        setIds(newIds);

        addClickedCards(event.target.children[2].outerText);
        console.log(clickedCards);
    }


    const cards = ids.map(id => 
        <Card 
            id = {id} 
            key = {id}
            clickHandler = {handleClick}
        />)

    return (
        <div className = "game">
            <Score score = {clickedCards.length}/>
            {cards}
        </div>
    )
}