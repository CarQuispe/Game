class Game{

  constructor(){
    this.rolls = new Array(21).fill(0);
    this.currentRoll = 0;
    
  }
  roll(pins){
    this.rolls[this.currentRoll++]=pins;
    //this.getScore += pins;
  }
  getScore(){
    let getScore =0;
    let i =0;
    for(let frame =0; frame<10;frame ++){
      getScore += this.roll[i]+ this.rolls[i+1];
      i+=2;
    }
    return getScore;
  }

}
module.exports= Game;
