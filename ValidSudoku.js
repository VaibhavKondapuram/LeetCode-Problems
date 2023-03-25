var isValidSudoku = function(board) {
    const row={};
    const column = {};
    const box = {};

    for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
      const currentValue = board[i][j];
      if (currentValue !== ".") {
        const boxIndex = Math.floor(i/3)*3 + Math.floor(j/3);
        if (row[`${i}-${currentValue}`] || column[`${j}-${currentValue}`] ||          box[`${boxIndex}-${currentValue}`] ) {
          return false
        }
        row[`${i}-${currentValue}`] = true
        column[`${j}-${currentValue}`] = true;
        box[`${boxIndex}-${currentValue}`] = true;
      }
    }
  }
  return true
};