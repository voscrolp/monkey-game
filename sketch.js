var monkey, monkeyRunning, monkeyCollided;
var backGround, backGroundImage;
var invisibleground;
var rock, rock1, rock2, rock3;
var rand;
var gameState;
var banana, bananaImage;
var score;
var jumplimit;

function preload() {
  monkeyRunning = loadAnimation("frame_00_delay-0.02s.gif", "frame_01_delay-0.02s.gif", "frame_02_delay-0.02s.gif", "frame_03_delay-0.02s.gif", "frame_05_delay-0.02s.gif", "frame_06_delay-0.02s.gif", "frame_07_delay-0.02s.gif", "frame_08_delay-0.02s.gif", "frame_09_delay-0.02s.gif", "frame_10_delay-0.02s.gif", "frame_11_delay-0.02s.gif", "frame_07_delay-0.02s.gif", "frame_06_delay-0.02s.gif", "frame_05_delay-0.02s.gif");

  monkeyCollided = loadImage("frame_00_delay-0.02s.gif");

  rock1 = loadImage("rock1.png");
  rock2 = loadImage("rock2.png");
  rock3 = loadImage("rock3.png");
  bananaImage = loadImage("bananaImage.png");

  backGroundImage = loadImage("junglebackground.jpg");

  gameState = "play";
}


function setup() {
  monkey = createSprite(50, 265, 10, 10);
  monkey.scale = 0.2;
  monkey.addAnimation("monkeyRunning", monkeyRunning);
  monkey.addAnimation("monkeyCollided", monkeyCollided);
  monkey.setCollider("rectangle", 60, 0, 200, 400);

  backGround = createSprite(200, 200, 10, 10);
  backGround.addAnimation("backGround", backGroundImage);
  backGround.scale = 0.19;
  backGround.velocityX = -2;
  backGround.width = 800;
  backGround.depth = -3;

  invisibleground = createSprite(200, 310, 400, 5);
  invisibleground.visible = false;

  rock = createSprite(3000, 3000, 10, 10);
  banana = createSprite(3000, 3000, 10, 10);

  score = 0;
  jumplimit = 250;
}

function draw() {
  background("black");
  monkey.collide(invisibleground);


  if (gameState == "play") {
    monkey.velocityY = monkey.velocityY + 2;
    monkey.changeAnimation("monkeyRunning", monkeyRunning);


    if (monkey.isTouching(rock) && monkey.scale != 0.2) {
      score = score - 10;
      rock.destroy();
    }else if(monkey.isTouching(rock) && monkey.scale == 0.2){
      gameState = "end";
    }

    if (backGround.x < 0) {
      backGround.x = backGround.width / 2;
    }

    if (keyWentDown("space") && monkey.y >= jumplimit) {
      monkey.velocityY = -25;
    }

    if (monkey.isTouching(banana)) {
      score = score + 1;
      banana.destroy();
    }

    switch (score) {
      case 0:
        monkey.scale = 0.2;
        jumplimit = 230;
        break;
        
      case 1:
        monkey.scale = 0.2;
        jumplimit = 230;
        break;
        
      case 2:
        monkey.scale = 0.2;
        jumplimit = 230;
        break;
        
      case 3:
        monkey.scale = 0.2;
        jumplimit = 230;
        break;
        
      case 4:
        monkey.scale = 0.2;
        jumplimit = 230;
        break;
        
      case 5:
        monkey.scale = 0.2;
        jumplimit = 230;
        break;
        
      case 6:
        monkey.scale = 0.2;
        jumplimit = 230;
        break;
        
      case 7:
        monkey.scale = 0.2;
        jumplimit = 230;
        break;
        
      case 8:
        monkey.scale = 0.2;
        jumplimit = 230;
        break;
        
      case 9:
        monkey.scale = 0.2;
        jumplimit = 230;
        break;
        
      case 10:
        monkey.scale = 0.25;
        jumplimit = 230;
        break;
        
      case 10:
        monkey.scale = 0.25;
        jumplimit = 230;
        break;

      case 11:
        monkey.scale = 0.25;
        jumplimit = 230;
        break;

      case 12:
        monkey.scale = 0.25;
        jumplimit = 230;
        break;

      case 13:
        monkey.scale = 0.25;
        jumplimit = 230;
        break;
        
      case 14:
        monkey.scale = 0.25;
        jumplimit = 230;
        break;
        
      case 15:
        monkey.scale = 0.25;
        jumplimit = 230;
        break;
        
      case 16:
        monkey.scale = 0.25;
        jumplimit = 230;
        break;
        
      case 17:
        monkey.scale = 0.25;
        jumplimit = 230;
        break;
        
      case 18:
        monkey.scale = 0.25;
        jumplimit = 230;
        break;
        
      case 19:
        monkey.scale = 0.25;
        jumplimit = 230;
        break;
        
      case 20:
        monkey.scale = 0.3;
        jumplimit = 210;
        break;
        
      case 21:
        monkey.scale = 0.3;
        jumplimit = 210;
        break;
        
      case 22:
        monkey.scale = 0.3;
        jumplimit = 210;
        break;
        
      case 23:
        monkey.scale = 0.3;
        jumplimit = 210;
        break;
        
      case 24:
        monkey.scale = 0.3;
        jumplimit = 210;
        break;
        
      case 25:
        monkey.scale = 0.3;
        jumplimit = 210;
        break;
        
      case 26:
        monkey.scale = 0.3;
        jumplimit = 210;
        break;
        
      case 27:
        monkey.scale = 0.3;
        jumplimit = 210;
        break;
        
      case 28:
        monkey.scale = 0.3;
        jumplimit = 210;
        break;
        
      case 29:
        monkey.scale = 0.3;
        jumplimit = 210;
        break;

      case 30:
        monkey.scale = 0.35;
        jumplimit = 190;
        break;
        
      case 31:
        monkey.scale = 0.35;
        jumplimit = 190;
        break;
        
      case 32:
        monkey.scale = 0.35;
        jumplimit = 190;
        break;
        
      case 33:
        monkey.scale = 0.35;
        jumplimit = 190;
        break;
        
      case 34:
        monkey.scale = 0.35;
        jumplimit = 190;
        break;
        
      case 35:
        monkey.scale = 0.35;
        jumplimit = 190;
        break;
        
      case 36:
        monkey.scale = 0.35;
        jumplimit = 190;
        break;
        
      case 37:
        monkey.scale = 0.35;
        jumplimit = 190;
        break;
        
      case 38:
        monkey.scale = 0.35;
        jumplimit = 190;
        break;
        
      case 39:
        monkey.scale = 0.35;
        jumplimit = 190;
        break;

      case 40:
        monkey.scale = 0.4;
        jumplimit = 170;
        break;
        
      case 41:
        monkey.scale = 0.4;
        jumplimit = 170;
        break;
        
      case 42:
        monkey.scale = 0.4;
        jumplimit = 170;
        break;
        
      case 43:
        monkey.scale = 0.4;
        jumplimit = 170;
        break;
        
      case 44:
        monkey.scale = 0.4;
        jumplimit = 170;
        break;
        
      case 45:
        monkey.scale = 0.4;
        jumplimit = 170;
        break;
        
      case 46:
        monkey.scale = 0.4;
        jumplimit = 170;
        break;
        
      case 47:
        monkey.scale = 0.4;
        jumplimit = 170;
        break;
        
      case 48:
        monkey.scale = 0.4;
        jumplimit = 170;
        break;
        
      case 49:
        monkey.scale = 0.4;
        jumplimit = 170;
        break;

      default:
        monkey.scale = 0.4;
        jumplimit = 170;
        break;
    }

    spawnBananas();
    spawnObstacles();
  }

  if (gameState == "end") {
    backGround.velocityX = 0;
    rock.velocityX = 0;
    rock.destroy();
    monkey.velocityY = 0;
    monkey.changeAnimation("monkeyCollided", monkeyCollided);
    banana.velocityX = 0;
    banana.destroy();

    if (keyWentDown("r" || "R")) {
      gameState = "play";
      backGround.velocityX = -2;
      rock.velocityX = -10;

      score = 0;
    }
  }

  drawSprites();
  textAlign(CENTER);
  textSize(15);
  fill(0);
  text("Score:" + score, 30, 25);

  if (gameState == "end") {
    textAlign(CENTER);
    textSize(25);
    fill(0);
    text("Game Over, Press R to restart", 200, 200);
  }
}

function spawnObstacles() {
  if (frameCount % 60 == 0) {
    rock = createSprite(400, 275, 10, 10);
    rock.scale = 0.5;
    rock.velocityX = -10;
    rock.lifetime = 150;

    rand = Math.round(random(1, 3));

    switch (rand) {
      case 1:
        rock.addImage("1", rock1);
        break;

      case 2:
        rock.addImage("2", rock2);
        break;

      case 3:
        rock.addImage("3", rock3);
        break;

      default:
        break;
    }
  }
}

function spawnBananas() {
  if (frameCount % 60 == 0) {
    banana = createSprite(400, random(100, 200), 10, 10);
    banana.addImage("bananas", bananaImage);
    banana.velocityX = -10;
    banana.scale = 0.08;
    banana.lifetime = 150;
  }
}