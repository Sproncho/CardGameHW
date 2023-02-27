import React from 'react';
import './Finish.css'
function Finish({p1Score,p2Score,setState}) {
    return (
        <div className={"finish"}>
            <div className={'score'}>Score:{p1Score}-{p2Score}</div>
            <div className={'button'} onClick={() => setState("game")}>AGAIN</div>
        </div>
    );
}

export default Finish;