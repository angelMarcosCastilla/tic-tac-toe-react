import { useEffect, useState } from "react";
import Board from "./components/Board";
import Chat from "./components/Chat";
import Modal from "./components/Modal";
import Score from "./components/Score";
import useModal from "./hooks/useModal";
import { PLAYER, STATUS_GAME, MAX_ROUND } from "./config/config";
import { validateWinner } from "./Utils/validator";

const initialstate = new Array(9).fill("");
const initialstateScore = { E: 0, G: 0, P: 0 };
let cont = 0;

function App() {
  const [cells, setCells] = useState(initialstate);
  const [turn, setTurn] = useState(PLAYER.X);
  const [round, setRound] = useState(1);
  const { isopen, openModal, closeModal } = useModal();
  const [score, setScore] = useState(initialstateScore);

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

    if (cont > 8 && !hasWin?.playerWin) {
      STATUS_GAME.isPlaying = !STATUS_GAME.isPlaying;
      STATUS_GAME.playerWin = "Empate";
      setScore({...score, E:score.E++})
      openModal();
      setTimeout(() => {
        closeModal();
        handleNewGame();
      }, 3000);
      setRound((prevRound) => prevRound + 1);
    }

    if (hasWin?.playerWin) {
      STATUS_GAME.isPlaying = !STATUS_GAME.isPlaying;
      STATUS_GAME.playerWin = hasWin.playerTurn;
      setRound((prevRound) => prevRound + 1);
      openModal();
      setTimeout(() => {
        closeModal();
        handleNewGame();
      }, 3000);
    }
  }, [turn]);

  const handleNewGame = () => {
    setCells(initialstate);
    setTurn(PLAYER.X);
    STATUS_GAME.isPlaying = !STATUS_GAME.isPlaying;
    STATUS_GAME.playerWin = "";
    cont = 0;
  };

  return (
    <div className="grid">
      <div className="headerInfo">
        <div className="turn">
          <span className="turn-O">O</span>
          <span className="turn__name">Jugador</span>
        </div>
        <div className="turn">
          <span className="turn-X">X</span>
          <span className="turn__name">Adversario</span>
        </div>
      </div>
      <div className="container">
        <Score round={round} />
        <Board cells={cells} handleClick={handleClick} />
        {isopen && <Modal ganador={STATUS_GAME.playerWin} />}
      </div>
      <Chat />
    </div>
  );
}

export default App;
