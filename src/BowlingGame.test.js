import Game from "./BowlingGame.js";

describe("Juego de bolos", () => {
  it("deberia crear el objeto de juego", () => {
    const g = new Game(); 
    for(let i = 0; i<20;i++){
      g.roll(0);
    }
    
    expect(g.getScore()).toBe(0);
  });
});
