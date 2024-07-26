import CharacterCard from './CharacterCard'
import './GamePage.css'

export default function GamePage(props) {
    return (
        <div className="game-page">
            <div className="card-container">
                {
                    GameData.characters.map(char => <CharacterCard img={char.img} desc={char.desc} name={char.name}  />)
                }
            </div>
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
    }]
}