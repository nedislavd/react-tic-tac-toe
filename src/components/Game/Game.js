import { React, useEffect, useState } from "react";
import { Board } from "../Board";
import { calculateWinner } from "../../utils/engine.js";

const gameStyle = {
  width: 250,
  margin: "20px auto",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const [draw, setDraw] = useState(false);

  const handleGameLogic = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) {
      return;
    }

    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  useEffect(() => {
    if (board.every((element) => element !== null)) {
      setDraw(true);
    }
  }, [board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setDraw(false);
    setXisNext(true);
  };

  const renderMoves = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    );
  };

  return (
    <>
      <Board squares={board} onClick={handleGameLogic} />
      <div style={gameStyle}>
        <p style={{ textAlign: "center" }}>
          {winner ? `Winner: ` + winner : ""}
          {draw
            ? `Game ended in Draw`
            : `Next Player: ` + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
