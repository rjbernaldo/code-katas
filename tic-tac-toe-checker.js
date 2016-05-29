// http://www.codewars.com/kata/tic-tac-toe-checker/javascript

function isSolved(board) {
  var isComplete = true;
  var winningElement;

  for (var y = 0; y < board.length; y++) {
    for (var x = 0; x < board[y].length; x++) {
      var currentElement = board[y][x];

      if (currentElement === 0) {
        isComplete = false;
      } else {
        // check hor
        var isHor = true;
        for (var i = 0; i < 3; i++) {
          if (board[y][i] !== currentElement) {
            isHor = false;
          }
        }

        if (isHor) {
          return currentElement;
        }

        // check ver
        var isVer = true;

        for (var i = 0; i < 3; i++) {
          if (board[i][x] !== currentElement) {
            isVer = false;
          }
        }
        if (isVer) {
          return currentElement;
        }

        // check forward diag
        var isForwardDiag = 0;
        var reducedX = x, reducedY = y;

        if (reducedY > 0 && reducedX > 0) {
          reducedX--;
          reducedY--;
        }

        for (var tempY = reducedY, tempX = reducedX; typeof board[tempY] === 'object'  && !isNaN(board[tempY][tempX]); tempY++, tempX++) {

          if (board[tempY][tempX] === currentElement) {
            isForwardDiag++;
          }
        }

        if (isForwardDiag === 3) {
          return currentElement;
        }

        // check backward diag
        var increasedX = x, increasedY = y;
        var isBackwardDiag = 0;

        if (increasedY > 0 && increasedX < 3) {
          increasedX++;
          increasedY--;
        }

        for (var tempY = increasedY, tempX = increasedX; typeof board[tempY] === 'object' && !isNaN(board[tempY][tempX]); tempY++, tempX--) {
          if (board[tempY][tempX] === currentElement) {
            isBackwardDiag++;
          }
        }

        if (isBackwardDiag === 3) {
          return currentElement;
        }
      }
    }
  }

  if (!isNaN(winningElement)) {
    return winningElement;
  } else if (isComplete) {
    return 0;
  } else {
    return -1;
  }
}
