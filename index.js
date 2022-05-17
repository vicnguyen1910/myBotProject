class Robot {
  constructor(X, Y, F) {
    this.X = X;
    this.Y = Y;
    this.F = F;
  }
}
class MaxSize {
  constructor(X, Y) {
    this.X = X;
    this.Y = Y;
  }
}
const oMaxSize = new MaxSize(5, 5);
const EAST = 'EAST';
const WEST = 'WEST';
const SOUTH = 'SOUTH';
const NORTH = 'NORTH';
let myRobot = new Robot(0,0,EAST);


function PLACE (X,Y,F){

}
function MOVE(){}
function LEFT(){
  if(myRobot.F==SOUTH){
    myRobot.F = EAST;
  } else if(myRobot.F==EAST){
    myRobot.F = NORTH;
  } else if(myRobot.F == NORTH){
    myRobot.F = WEST;
  } else if (myRobot.F == WEST){
    myRobot.F = SOUTH;
  }else{
    console.log("Invalid Robot Direction");
  }
}
function RIGHT(){}
function REPORT(){}


