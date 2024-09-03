import {WINNER_COMBOS} from "../constants.js"
export const checkWinnerFrom = (boardToCheck) =>{
    for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if (boardToCheck[a] && boardToCheck[a] == boardToCheck[b] && boardToCheck[a] == boardToCheck[c]) {
        return boardToCheck[a]
      }

    }
    return null
  }

export const checkEndGame = (newBoard) => {
    //revisa si no hay mas espacios vacios sin un ganador para saber si hay empate
    return newBoard.every((square) => square != null)
  }