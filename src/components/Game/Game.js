import { React, useEffect, useState } from "react";
import { Board } from "../Board";
import { calculateWinner } from "../../utils/engine.js";

const textCenter = {
    textAlign: "center",
}

const textLegend = {
    fontSize: "0.8rem",
    fontStyle: 'italic',
}

const gameStyle = {
  width: 250,
  margin: "20px auto",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [playerOnePiece, setPlayerOnePiece] = useState("X");
  const [playerTwoPiece, setPlayerTwoPiece] = useState("O");
  const [gameStarted, setGameStarted] = useState(false);
  const winner = calculateWinner(board);
  const [draw, setDraw] = useState(false);

  const handleGameLogic = (i) => {
    const boardCopy = [...board];
    setGameStarted(true);
    if (winner || boardCopy[i]) {
      return;
    }

    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  useEffect(() => {
    if (!winner && board.every((element) => element !== null)) {
      setDraw(true);
    }
  }, [board, winner]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setDraw(false);
    setXisNext(true);
    setGameStarted(false);
  };

  const renderMoves = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    );
  };

  const swapPlayerPieces = () => {
    if (playerOnePiece === "X") {
        setPlayerOnePiece("O");
        setPlayerTwoPiece("X");
    } else {
        setPlayerOnePiece("X");
        setPlayerTwoPiece("O");
    }
  }

  return (
    <>
      <h2 style={textCenter}>Play Tic-Tac-Toe</h2>
      <section style={textCenter}>
        <h4>Choose Your Piece</h4>
        Player 1: {playerOnePiece} <button disabled={gameStarted} onClick={swapPlayerPieces}>swap</button> Player 2: {playerTwoPiece}
          <p style={textLegend}>"X" always goes first</p>
      </section>
      <Board squares={board} onClick={handleGameLogic} />
      <div style={gameStyle}>
        <p style={{ textAlign: "center" }}>
          {winner ? `Winner: ` + winner : ""}
          {draw
            ? `Game ended in Draw`
            : ""}
          {(!draw && !winner) ?  `Next Player: ` + (xIsNext ? "X" : "O") : ""}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
