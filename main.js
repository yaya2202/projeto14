var fundo, fundo_img;
var arco, arco_img;
var placar = 0;
var red_ballon, red_ballon_img;
var blue_ballon, blue_ballon_img;
var green_ballon, green_ballon_img;
var pink_ballon, pink_ballon_img;
var flecha, flecha_img;
var flechaGrupo, redGrupo, greenGrupo, blueGrupo, pinkGrupo;

function preload(){
    fundo_img = loadImage("background0.png");
    arco_img = loadImage("bow0.png");
    red_ballon_img = loadImage("red_balloon0.png");
    blue_ballon_img = loadImage("blue_balloon0.png");
    green_ballon_img = loadImage("green_balloon0.png");
    pink_ballon_img = loadImage("pink_balloon0.png");
    flecha_img = loadImage("arrow0.png");   
}

function setup(){
    createCanvas(400,400);
    fundo = createSprite(200,200,400,20);
    fundo.addImage(fundo_img);
    
    arco = createSprite(390,220,20,50);
    arco.addImage(arco_img);
    arco.scale = 1;
 
    redGrupo = new Group();
    greenGrupo = new Group();
    blueGrupo = new Group();
    pinkGrupo = new Group();
    flechaGrupo = new Group();
}

function draw(){
    background("lightgray");
    arco.y = World.mouseY;
    if(keyDown("space")){
      criacaoFlecha();  
    }
    var select_balloon = Math.round(random(1,4));
    if (World.frameCount % 100 == 0) {
        if (select_balloon == 1) {
          redBalloon();
        } else if (select_balloon == 2) {
          greenBalloon();
        } else if (select_balloon == 3) {
          blueBalloon();
        } else {
          pinkBalloon();
        }
      }
      if(flechaGrupo.isTouching(redGrupo)){
        redGrupo.destroyEach();
        flechaGrupo.destroyEach();
        placar += 1; 
      }
      if(flechaGrupo.isTouching(greenGrupo)){
        greenGrupo.destroyEach();
        flechaGrupo.destroyEach();
        placar += 1; 
      }
      if(flechaGrupo.isTouching(blueGrupo)){
        blueGrupo.destroyEach();
        flechaGrupo.destroyEach();
        placar += 3; 
      }
      if(flechaGrupo.isTouching(pinkGrupo)){
        pinkGrupo.destroyEach();
        flechaGrupo.destroyEach();
        placar += 2; 
      }
      drawSprites();
    textSize(12);
    textFont("arial Black");
    text("Pontuação: " + placar, 200,30);
    
}

function redBalloon(){
    var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
    red.addImage(red_ballon_img);
    red.velocityX = 3;
    red.lifetime = 150;
    red.scale = 0.1;
    redGrupo.add(red);
}

function blueBalloon() {
    var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
    blue.addImage(blue_ballon_img);
    blue.velocityX = 3;
    blue.lifetime = 150;
    blue.scale = 0.1;
    blueGrupo.add(blue);
}

function greenBalloon() {
    var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
    green.addImage(green_ballon_img);
    green.velocityX = 3;
    green.lifetime = 150;
    green.scale = 0.1;
    greenGrupo.add(green);
}

function pinkBalloon() {
    var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
    pink.addImage(pink_ballon_img);
    pink.velocityX = 3;
    pink.lifetime = 150;
    pink.scale = 1;
    pinkGrupo.add(pink);
}

function criacaoFlecha() {
  var flecha = createSprite(100, 100, 60, 10);
  flecha.addImage(flecha_img);
  flecha.x = 360;
  flecha.y = arco.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3;
  flechaGrupo.add(flecha);
}