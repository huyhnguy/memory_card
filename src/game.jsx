import Card from "./card"
import { useState } from "react"

function Score({ score, text, className }) {

    return (
        <h3 className = {className} >{text}: {score}</h3>
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
    const [highScore, setHighScore] = useState('0');


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
            if (clickedCards.length === 20) {
                alert('You win!');
            }
        } else {
            setHighScore(clickedCards.length);
            setClickedCards([]);
        }
        
    }

    function handleClick(event) {

        const newIds = shuffle(ids);
        setIds(newIds);

        addClickedCards(event.target.children[2].outerText);
    }


    const cards = ids.map(id => 
        <Card 
            id = {id} 
            key = {id}
            clickHandler = {handleClick}
        />)

    return (
        <>
        <div className = "scores">
            <Score 
                score = {clickedCards.length}
                text = "Score" 
                className = "score"
            />
            <Score 
                score = {highScore}
                text = "High Score"
                className = "score"
            />
        </div>
        
        <div className = "game">
            {cards}
        </div>
        </>
        
    )
}