export const optionsWinner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const validateWinner = (playerTurn, cells) => {
  let playerWin = false;
  let hasWon = false;
  optionsWinner.forEach((options) => {
    hasWon = options.every((cell) => playerTurn === cells[cell]);
    if (hasWon) playerWin = hasWon;
  });

  return {
    playerWin,
    playerTurn,
  };
};
