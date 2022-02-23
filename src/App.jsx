import { useEffect, useState } from "react";
import { validateWinner } from "./Utils/validator";

const initialstate = new Array(9).fill("");

let cont = 0;
const PLAYER = {
  X: "X",
  O: "O",
};

const STATUS_GAME = {
  isPlaying: true,
};
function App() {
  const [cells, setCells] = useState(initialstate);
  const [turn, setTurn] = useState(PLAYER.X);

  const handleClick = (e, index) => {
    if (!STATUS_GAME.isPlaying) return;

    const newCell = [...cells];
    if (!newCell[index]) {
      newCell[index] = turn;
      setCells(newCell);
      setTurn((prevTurn) => (prevTurn === PLAYER.X ? PLAYER.O : PLAYER.X));
      cont++;
    }
  };

  useEffect(() => {
    let playerTurn = turn === PLAYER.X ? PLAYER.O : PLAYER.X;
    let hasWin;
    if (cont > 4) {
      hasWin = validateWinner(playerTurn, cells);
    }

    if (hasWin?.playerWin) {
      STATUS_GAME.isPlaying = !STATUS_GAME.isPlaying;
     // handleNewGame();
    }
  }, [turn]);

  const handleNewGame = () => {
    setCells(initialstate);
    setTurn(PLAYER.X);
  };

  return (
    <>
      <div className="container">
        <div className="gridBoard">
          {cells.map((cell, index) => (
            <div
              key={index}
              className="cell"
              onClick={(e) => handleClick(e, index)}
            >
            <span className={cell}></span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
