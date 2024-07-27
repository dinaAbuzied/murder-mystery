import { useState } from 'react'
import CharacterCard from './CharacterCard'
import './GamePage.css'

export default function GamePage(props) {
    const [killerName, setKillerName] = useState('');
    const [killerCaught, setkillerCaught] = useState();

    const catchKiller = () => {
        if (killerName === GameData.killer) {
            setkillerCaught(true);
        } else {
            setkillerCaught(false)
        }
    }

    const setKillerParagraph = () => {
        if (killerCaught) return <div className='correct-answer'>
            <h2>Killer: {GameData.killer}</h2>
            <p>{GameData.motive}</p>
        </div>
        if(killerCaught === false) return <p className='wrong-answer'>Wrong Answer!!</p>
    }
    return (
        <div className="game-page">
            <h2>Welcome {props.playerName}</h2>
            <div className="card-container">
                {
                    GameData.characters.map(char => <CharacterCard img={char.img} desc={char.desc} name={char.name} />)
                }
            </div>
            <div className='action-bar'>
                <input type="text" value={killerName} onChange={(event) => setKillerName(event.target.value)} placeholder='Enter Killer Name' />
                <button onClick={catchKiller} className='btn'>Submit</button>
            </div>
                {setKillerParagraph()}
        </div>
    )
}

const GameData = {
    characters: [{
        img: '/Scarlett.png',
        name: 'Madeline Blackwood (Wife)',
        desc: `Madeline is a striking woman in her early forties, known for her elegance and sharp wit. Despite their public image as a perfect couple, whispers of their tumultuous relationship have circulated for years. Recently, she discovered Jonathan's affair, which has left her feeling betrayed and humiliated.`
    }, {
        img: '/Plum.png',
        name: 'Henry Blackwood (Brother)',
        desc: `Henry is Jonathan’s younger brother, a charming yet envious man in his late thirties. He always felt overshadowed by Jonathan's success and resented his brother for taking control of the family business.`
    }, {
        img: '/Peach.png',
        name: 'Sophia Reynolds (Assistant)',
        desc: `Sophia is a diligent and intelligent woman in her late twenties. She has worked closely with Jonathan for five years and knows many of his secrets. Recently, she was seen arguing with Jonathan about a significant business deal that could ruin her career.`
    }, {
        img: '/Green.png',
        name: 'Ethan Clarke (Business Partner)',
        desc: `Ethan is a shrewd and ambitious man in his forties. He was Jonathan's business partner and close friend. However, their relationship has soured due to a recent failed investment, leading to significant financial losses.`
    }, {
        img: '/White.png',
        name: 'Grace Bennett (Housekeeper)',
        desc: `Grace is a loyal and observant woman in her fifties who has worked for the Blackwood family for decades. She has always been fond of Jonathan but recently discovered a dark secret about his involvement in her son's tragic accident.`
    }],
    killer: 'Sophia Reynolds',
    motive: `Sophia Reynolds, the diligent and intelligent assistant, harbored deep resentment and fear due to Jonathan's erratic behavior and threats to ruin her career. Jonathan discovered that Sophia had been embezzling funds from the company and was planning to expose her. In a fit of desperation, knowing that her career and future were on the line, she decided to take drastic measures. On the night of the murder, Sophia confronted Jonathan in his study. The argument escalated, and in a moment of panic, she struck him with the heavy paperweight from his desk. To make it look like a locked-room mystery, she meticulously staged the scene before locking the door from the inside and escaping through a hidden passage she had discovered while working late nights. The ominous note, "Secrets die with you," was meant to divert suspicion and add to the mystery.
    Sophia's meticulous nature and intimate knowledge of Jonathan's routines allowed her to create a convincing alibi, but subtle clues, such as inconsistencies in her story and traces of the hidden passage, ultimately lead to her downfall.`
}