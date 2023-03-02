import React, {useEffect, useState} from 'react';
import './Game.css'
import {CardClass, generateDeck} from "../../utils/utils";
import Card from "../Card/Card";
function Game({playerName,setState,scoreInfo,setLastGameScore}) {
    const [p1Score,setP1Score] = useState(0);
    const [p2Score,setP2Score] = useState(0);
    const [p1Card,setP1Card] = useState(new CardClass(0,0));
    const [p2Card,setP2Card] = useState(new CardClass(0,0));
    const [deck,setDeck] = useState(generateDeck());
    const handleTurn = (e) => {
        console.log(deck)
        if(deck.firstPlayerCards.length !== 0){
            setP1Card(deck.firstPlayerCards.pop());
            setP2Card(deck.secondPlayerCards.pop());
            if(p1Card.num > p2Card.num)
                setP1Score(p1Score + 1);
            else if(p1Card.num < p2Card.num) {
                setP2Score( p2Score + 1)
            }
        }else {
            if(p1Score>p2Score){
                scoreInfo.setP1Score(scoreInfo.p1Score +1 )
            }else if(p1Score < p2Score) {
                scoreInfo.setP2Score(scoreInfo.p2Score + 1)
            }
            setLastGameScore({p1Score,p2Score})
            setState("finish")
        }
    }
    return (
        <div className='game'>
            <div className='header'>
                <p className='score'>score:{p1Score}-{p2Score}</p>
                <p className='computer'>computer</p>
            </div>
            <div className='field'>
                <Card num={p1Card.num} suit={p1Card.suit}/>
                <Card num={p2Card.num} suit={p2Card.suit}/>
            </div>
            <div className='footer'>
                <p className={'button'} onClick={handleTurn}>next</p>
                <p>{playerName}</p>
            </div>
        </div>
    );
}

export default Game;