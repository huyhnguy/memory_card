import Card from "./card"

const Ids = [
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

export default function Cards() {
    const cards = Ids.map(id => <Card id = {id} />)

    return (
        <>
            {cards}
        </>
    )
}