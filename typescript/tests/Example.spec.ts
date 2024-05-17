import {Movements, RockPaperScissors} from "../src/RockPaperScissors";

let game: RockPaperScissors
beforeEach(() => {
  game = new RockPaperScissors()
})

describe('Rock Paper Scissors', () => {
  it.each([
    [Movements.SCISSORS, Movements.ROCK, 'Player_2'],
    [Movements.ROCK, Movements.SCISSORS, 'Player_1']
  ])('rock should beat scissors', (movementPlayerOne: Movements, movementPlayerTwo: Movements, winner: string) => {
    expect(
      game.plays(movementPlayerOne, movementPlayerTwo)
    ).toBe(winner)
  });

  it.each([
    [Movements.SCISSORS, Movements.PAPER, 'Player_1'],
    [Movements.PAPER, Movements.SCISSORS, 'Player_2']
  ])('scissors should beat paper', (movementPlayerOne: Movements, movementPlayerTwo: Movements, winner: string) => {
    expect(
      game.plays(movementPlayerOne, movementPlayerTwo)
    ).toBe(winner)
  });

  it.each([
    [Movements.ROCK, Movements.PAPER, 'Player_2'],
    [Movements.PAPER, Movements.ROCK, 'Player_1']
  ])('rock should beat paper', (movementPlayerOne: Movements, movementPlayerTwo: Movements, winner: string) => {
    expect(
      game.plays(movementPlayerOne, movementPlayerTwo)
    ).toBe(winner)
  });
  it.each([
    [Movements.ROCK, Movements.ROCK, 'Withdraw'],
    [Movements.PAPER, Movements.PAPER, 'Withdraw'],
    [Movements.SCISSORS, Movements.SCISSORS, 'Withdraw'],
  ])('same movement should withdraw', (movementPlayerOne: Movements, movementPlayerTwo: Movements, winner: string) => {
    expect(
      game.plays(movementPlayerOne, movementPlayerTwo)
    ).toBe(winner)
  });
});



