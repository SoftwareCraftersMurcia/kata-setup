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

  describe('Player Two wins', () => {
    it('given that the second player uses paper beats rock', () => {
      expect(
        game.plays(Movements.ROCK, Movements.PAPER)
      )
        .toBe('Player_2')
    })
  });

  describe('Player One wins', ()=> {
    it('given that the first player uses paper beats rock', () => {
      expect(
        game.plays(Movements.PAPER, Movements.ROCK)
      )
        .toBe('Player_1')
    })
    
  })
});



