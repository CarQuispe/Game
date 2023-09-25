class Game {

  constructor(){
    this.rolls = new Array(21).fill(0);
    this.currentRoll = 0;
    
  }
  roll(pins){
    this.rolls[this.currentRoll++]=pins;
    //this.getScore += pins;
  }
  getScore(){
    let score =0;
    let frameIndex =0;
    for(let frame =0; frame<10;frame ++){
      if(this.isStrike(frameIndex)){
        score+= (10 + this.strikeBonus(frameIndex));
        frameIndex ++;
      }else if(this.isSpare(frameIndex)){
        score += 10 + this.spareBonus(frameIndex);
        frameIndex +=2;

      }else{
        score +=this.sumOfBallsinFrame(frameIndex);
        frameIndex +=2;
      }
      
    }
    return score;
  }
  isStrike(frameIndex){
    return   this.rolls[frameIndex] === 10 ;
  }
  sumOfBallsinFrame(frameIndex){
    return    this.rolls[frameIndex]+this.rolls[frameIndex+1];
  }
  spareBonus(frameIndex){
    return this.rolls[frameIndex + 2];

  }
  strikeBonus(frameIndex){
    return     this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2 ];
  }
   
  isSpare(frameIndex){
    return this.rolls[frameIndex] + this.rolls[frameIndex+1] === 10 ;
  }

}
module.exports = Game;
