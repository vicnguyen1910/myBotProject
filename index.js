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
let myRobot = new Robot(0, 0, EAST);

function PLACE(X, Y, F) {
  if(X>=oMaxSize.X){
    console.log("Invalid robot position X");
    return false;
  } else if(Y>=oMaxSize.X){
    console.log("Invalid robot position Y");
    return false;
  } else if(F!=EAST && F!= WEST && F!= SOUTH && F!=NORTH){
    console.log("Invalid robot position F");
    return false;
  }else{
    myRobot.X = X;
    myRobot.Y = Y;
    myRobot.F = F;
    return true
  }
}
function ValidateNextMove(X,Y,F){
  if(F==EAST){
    if(Y==oMaxSize.Y-1){
      console.log("Robot cannot move this direction.");
      return false;
    } else return true;
  }else if(F==WEST){
    if(Y==0){
      console.log("Robot cannot move this direction.");
      return false;
    } else return true;
  }else if(F==SOUTH){
    if(X==0){
      console.log("Robot cannot move this direction.");
      return false;
    } else return true;
  }else if (F==NORTH){
    if(X==oMaxSize.X-1){
      console.log("Robot cannot move this direction.");
      return false;
    } else return true;
  }else{
    return false;
  }
}
function MOVE() {
  if(PLACE(myRobot.X,myRobot.Y,myRobot.F) == true && ValidateNextMove(myRobot.X,myRobot.Y,myRobot.F)==true){
    if(myRobot.F==EAST){
      myRobot.Y = myRobot.Y +1;
    }else if(myRobot.F==WEST){
      myRobot.Y = myRobot.Y -1;
    }else if(myRobot.F==SOUTH){
      myRobot.X = myRobot.X -1;
    }else if (myRobot.F==NORTH){
      myRobot.X = myRobot.X +1;
    }
  }
}
function LEFT() {
  if (myRobot.F == SOUTH) {
    myRobot.F = EAST;
  } else if (myRobot.F == EAST) {
    myRobot.F = NORTH;
  } else if (myRobot.F == NORTH) {
    myRobot.F = WEST;
  } else if (myRobot.F == WEST) {
    myRobot.F = SOUTH;
  } else {
    console.log('Invalid Robot Direction');
  }
}
function RIGHT() {
  if (myRobot.F == SOUTH) {
    myRobot.F = WEST;
  } else if (myRobot.F == EAST) {
    myRobot.F = SOUTH;
  } else if (myRobot.F == NORTH) {
    myRobot.F = EAST;
  } else if (myRobot.F == WEST) {
    myRobot.F = NORTH;
  } else {
    console.log('Invalid Robot Direction');
  }
}
function REPORT() {
  console.log('> ' + myRobot.X + ',' + myRobot.Y + ',' + myRobot.F);
}

PLACE(0,4,SOUTH);
MOVE();
REPORT();
PLACE(0,4,SOUTH);
RIGHT();
MOVE();
REPORT();