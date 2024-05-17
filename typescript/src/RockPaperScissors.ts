
export enum Movements {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors',
}

export class RockPaperScissors {
    plays(playerOneMovement: Movements, playerTwoMovement: Movements) {
        const winningMovements: Record<Movements, Movements> = {
            [Movements.SCISSORS]: Movements.PAPER,
            [Movements.PAPER]: Movements.ROCK,
            [Movements.ROCK]: Movements.SCISSORS,
        }

        if ( winningMovements[playerTwoMovement] === playerOneMovement) {
            return 'Player_2'
        }
        if (playerOneMovement === Movements.PAPER && playerTwoMovement !== Movements.SCISSORS) {
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
