var Player;
var gamestate=1;


function setup() {
  createCanvas(displayWidth-50, displayHeight-200);
  Player=createSprite(200,200,50,50);

}

function draw() {
  background("black");
  spawnVillan();
  drawSprites();
}


function spawnVillan(){
  if(gamestate===1)
  {for(i=0; i<10; i++){
    var villan=createSprite(300+i*50,200,30,30);}}
    
   
}