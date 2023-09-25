import Game from "./BowlingGame.js";

describe("Juego de bolos", () => {
  let g;

  beforeEach(() => {
    g = new Game();
  });

  function rollMany(n, pins) {
    for (let i = 0; i < n; ++i) {
      g.roll(pins);
    }
  }

  it("deberia crear el objeto de juego", () => {
    rollMany(20, 0);
    expect(g.getScore()).toBe(0);
  });

  it("deberia ser un juego con todos los tiros de valor 1", () => {
    rollMany(20, 1);
    expect(g.getScore()).toBe(20);
  });
});
