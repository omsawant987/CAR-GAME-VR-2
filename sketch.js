var GameState = 0;
var PlayerCount = 0;
var database,form,player,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  background("white");
  
    
}