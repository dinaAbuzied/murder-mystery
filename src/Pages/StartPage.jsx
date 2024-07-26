import './StartPage.css'


export default function StartPage(props) {
    const setCurrentPage = props.setCurrentPage;
    return (
        <div className='start-container'>
            <h1>Murder Mystery</h1>
            <h2>Crime Scene</h2>
            <p>In the dimly lit study of an old mansion, the lifeless body of Mr. Jonathan Blackwood, a wealthy entrepreneur, is found slumped over his desk. The room is in disarray, with papers scattered across the floor and a shattered glass of whiskey near his hand. The only light comes from a flickering fireplace, casting eerie shadows on the walls. An ominous note lies on the desk, written in haste: "Secrets die with you." The doors and windows were locked from the inside, leaving the detectives puzzled.</p>
            <h2>Objective</h2>
            <p>You must examine the evidence, question the suspects, and uncover hidden motives to determine who among them committed the murder of Jonathan Blackwood. Each character has a unique story and potential clues that could lead to the real killer.</p>
            <button onClick={() => setCurrentPage('game-page')} className='start-btn'>Start Game</button>
        </div>
    )
}