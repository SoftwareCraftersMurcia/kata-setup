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
  })

  describe('Player Two wins', () => {
    it('given that the second player uses rock beats scissors', () => {
      expect(
        game.plays(Movements.SCISSORS, Movements.ROCK)
      )
        .toBe('Player_2')
    })
    it('given that the second player uses paper beats rock', () => {
      expect(
        game.plays(Movements.ROCK, Movements.PAPER)
      )
        .toBe('Player_2')
    })
    it('given that the second player uses scissors beats paper', () => {
      expect(
        game.plays(Movements.PAPER, Movements.SCISSORS)
      )
        .toBe('Player_2')
    })

  });

  describe('Player One wins', ()=> {
    it('given that the first player uses rock beats scissors', () => {
      expect(
        game.plays(Movements.ROCK, Movements.SCISSORS)
      )
        .toBe('Player_1')
    })
    it('given that the first player uses paper beats rock', () => {
      expect(
        game.plays(Movements.PAPER, Movements.ROCK)
      )
        .toBe('Player_1')
    })
    it('given that the first player uses scissors beats paper', () => {
      expect(
        game.plays(Movements.SCISSORS, Movements.PAPER)
      )
        .toBe('Player_1')
    })

  })
});



