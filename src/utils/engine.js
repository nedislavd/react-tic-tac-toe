/**
 *  !OLD!
 *  Method implemented from the official ReactJS Tutorial
 *  https://reactjs.org/tutorial/tutorial.html#declaring-a-winner
 *  */
export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/**
 * Idea based on code from Ecman
 * https://codepen.io/ecman/full/WRvPMo/
 * */
export function getWins(boardSize) {
  const moves = Array(boardSize + boardSize + 2).fill(null);
  return moves.slice(0).map((value, index) => {
    if (index < boardSize) {
      // [index, index + 1, index + 2, index + 3]
      return Array(boardSize)
        .fill(null)
        .map((val, ndx) => index * boardSize + ndx);
    } else if (index < boardSize * 2) {
      // [index  - boardSize, index, index + boardSize * 1, index + boardSize * 2]
      // index = 2 5 9 13
      return Array(boardSize)
        .fill(null)
        .map((val, ndx) =>
          Math.max(index - boardSize, index - boardSize + boardSize * ndx)
        );
    } else {
      // Diagonal top-right to bottom-left
      // top-left to bottom-right
      if (index % 2 === 0) {
        // [(boardSize + 1) * 0, (boardSize + 1) * 1, (boardSize + 1) * 2, (boardSize + 1) * 3]
        return Array(boardSize)
          .fill(null)
          .map((val, ndx) => (boardSize + 1) * ndx);
      } else {
        // [(boardSize - 1) * 1, (boardSize - 1) * 2, (boardSize - 1) * 3, (boardSize - 1) * 4]
        return Array(boardSize)
          .fill(null)
          .map((val, ndx) => (boardSize - 1) * (ndx + 1));
      }
    }
  });
}

export function calculateWin(items, sequences) {
  return sequences.filter((sequence) => {
    return sequence.reduce((acc, val) => {
      return items[val] === acc ? acc : null;
    }, items[sequence[0]])
      ? true
      : false;
  });
}

export function getWin(boardSize, squares) {
  const wins = getWins(boardSize);
  const win = calculateWin(squares, wins);
  return win.length ? win[0] : null;
}
