
export enum Movements {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors',
}

export class RockPaperScissors {
  plays(playerOneMovement: Movements, playerTwoMovement: Movements) {
    if (playerOneMovement === Movements.PAPER) {
      if (playerTwoMovement === Movements.SCISSORS) {
        return 'Player_2'
      }
      return 'Player_1'
    }

    if (playerOneMovement === Movements.SCISSORS && playerTwoMovement === Movements.PAPER) {
      return 'Player_1'
    }

    if (playerTwoMovement === Movements.ROCK) {
      return 'Player_2'
    }
    if (playerTwoMovement === Movements.PAPER) {
      return 'Player_2'
    }


    return 'Player_1'
  }
}
