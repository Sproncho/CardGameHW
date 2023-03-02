import React from 'react';
import './Finish.css'
function Finish({p1Score,p2Score,setState,lastGameScore,name}) {
    return (
        <div className={"finish"}>
            {lastGameScore.p1Score > lastGameScore.p2Score && <div className={"result"}>
                computer wins:{lastGameScore.p1Score}-{lastGameScore.p2Score}
            </div>}
            {lastGameScore.p1Score < lastGameScore.p2Score && <div className={"result"}>
                {name} wins:{lastGameScore.p1Score}-{lastGameScore.p2Score}
            </div>}
            {lastGameScore.p1Score > lastGameScore.p2Score && <div className={"result"}>
                draw
            </div>}
            <div className={'score'}>Score:{p1Score}-{p2Score}</div>
            <div className={'button'} onClick={() => setState("game")}>AGAIN</div>
        </div>
    );
}

export default Finish;