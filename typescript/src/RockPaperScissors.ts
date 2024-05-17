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

        if (playerOneMovement === Movements.ROCK && playerTwoMovement === Movements.ROCK) {
            return "Withdraw"
        }

        if (winningMovements[playerTwoMovement] === playerOneMovement) {
            return 'Player_2'
        }


        return 'Player_1'
    }
}
