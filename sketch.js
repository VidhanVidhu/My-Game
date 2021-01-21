var blackJet, whiteJet;
 
var blackJetImage, whiteJetImage, bulletImage;
 
function preload() {
  blackJetImage = loadImage("black-jet.png");
  whiteJetImage = loadImage("white-jet.png");
  bulletImage = loadImage("bullett.jpg");

}
 
function setup() {
  createCanvas(400, 400);
  blackJet = createSprite(200,100,10,10)
  blackJet.addImage(blackJetImage)
  whiteJet = createSprite(200,300,10,10)
  whiteJet.addImage(whiteJetImage)

}

 
function draw() {
  background(130);
  whiteJet.x = World.mouseX
  fir()

  drawSprites();

}
function fir() {
  var bullet = createSprite(100, 100, 60, 10);
  bullet.addImage(bulletImage);
  bullet.y = 360;
  bullet.x=whiteJet.x;
  bullet.velocityX = -4;
  bullet.lifetime = 100;
  bullet.scale = 0.3;
   
}
