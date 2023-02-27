import React from 'react';
import './Main.css'

function Main({setPlayerName, playerName, setState}) {

    return (
        <div className='main'>
            <p>Write Your Name</p>
            <input type="text" name={"name"} value={playerName} onChange={e => setPlayerName(e.target.value)}/>
            <div className="button" onClick={e => {
                console.log(playerName)
                setState('game')
            }
            }>continue
            </div>
        </div>
    );
}

export default Main;