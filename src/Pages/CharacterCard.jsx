import { useState } from 'react'
import './CharacterCard.css'

export default function CharacterCard(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => setIsFlipped(!isFlipped);
    const cardDetails = () => {
        if(isFlipped) return <p className='desc'>{props.desc}</p>
        return <>
        <img src={props.img} alt="" />
        <p className='name'>{props.name}</p>
        </>
    }
    return (
    <button className="card" onClick={flipCard}>
        {cardDetails()}
    </button>
    )
}