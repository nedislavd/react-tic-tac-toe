import { useEffect, useState } from "react";
import { Board } from "../Board";
import { getWin } from "../../utils/engine.js";

const textCenter = {
  textAlign: "center",
};

const textLegend = {
  fontSize: "0.8rem",
  fontStyle: "italic",
};

const gameStyle = {
  margin: "20px auto",
  display: "block",
  textAlign: "center",
  verticalAlign: "top",
};

const Game = () => {
  const [boardSize, setBoardSize] = useState(3);
  const [board, setBoard] = useState(Array(boardSize * boardSize).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [playerOnePiece, setPlayerOnePiece] = useState("X");
  const [playerTwoPiece, setPlayerTwoPiece] = useState("O");
  const [gameStarted, setGameStarted] = useState(false);
  const winner = getWin(boardSize, board);
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
    console.log("winner", winner);
  }, [board, winner]);

  const resetGame = () => {
    setBoard(Array(boardSize * boardSize).fill(null));
    setDraw(false);
    setXisNext(true);
    setGameStarted(false);
  };

  const renderMoves = () => {
    return (
      <div style={textCenter}>
        <p style={textCenter}>
          {winner
            ? `Winner: ` +
              (playerOnePiece === board[winner[0]]
                ? "Player One"
                : "Player Two")
            : ""}
          {draw ? `Game ended in Draw` : ""}
          {!draw && !winner ? `Next Move: ` + (xIsNext ? "X" : "O") : ""}
        </p>
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
  };

  const changeGridSize = (e) => {
    setBoardSize(parseInt(e.target.value));
  };

  useEffect(() => {
    resetGame();
  }, [boardSize]);

  return (
    <>
      <h2 style={textCenter}>Play Tic-Tac-Toe</h2>
      {/*TODO: split ChoosePiece and ChooseGridSize into their separate components*/}
      <section style={textCenter}>
        <h4>Choose Your Piece</h4>
        Player 1: {playerOnePiece}{" "}
        <button disabled={gameStarted} onClick={swapPlayerPieces}>
          swap
        </button>{" "}
        Player 2: {playerTwoPiece}
        <p style={textLegend}>"X" always goes first</p>
      </section>
      <section style={textCenter}>
        <h4>Choose Grid Size</h4>
        <select
          disabled={gameStarted}
          defaultValue={boardSize}
          onChange={changeGridSize}
        >
          <option value="3">3x3</option>
          <option value="4">4x4</option>
          <option value="5">5x5</option>
          <option value="6">6x6</option>
          <option value="7">7x7</option>
          <option value="8">8x8</option>
          <option value="9">9x9</option>
        </select>
      </section>
      <Board squares={board} winner={winner} onClick={handleGameLogic} />
      <div style={gameStyle}>{renderMoves()}</div>
    </>
  );
};

export default Game;
