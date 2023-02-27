import Main from "./Components/Main/Main";
import './App.css';
import {useState} from "react";
import Game from "./Components/Game/Game";
import Finish from "./Components/Finish/Finish";

function App() {
    const [state,setState] = useState('main');
    const [playerName,setPlayerName] = useState('');
    const [p1Score,setP1Score] = useState(0);
    const [p2Score,setP2Score] = useState(0);
    const scoreInfo ={p1Score,setP1Score,p2Score,setP2Score}
  return (
    <div className="App">
        {state === 'main' && <Main setPlayerName={setPlayerName} playerName={playerName} setState={setState}/>}
        {state === 'game' && <Game playerName={playerName} setState={setState} scoreInfo={scoreInfo}/>}
        {state === "finish" && <Finish p1Score={p1Score} p2Score={p2Score} setState={setState}/>}
    </div>
  );
}

export default App;
