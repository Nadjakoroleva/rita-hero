let hero;
let food;
let x = 0;
let y = 0;
let x2 = 0;
let y2 = 0;
let foodX = 0;
let foodY = 0;
let enemyX = 0;
let enemyY = 0;
let dx = 5;
let dy = 5;
let health = 0;
let dHealth = 0;

function setup() {
  createCanvas(800, 800);
  foodX = random(100, 700);
  foodY = random(100, 700);
  enemyX = random(350, 700);
  enemyY = random(350, 700);
  noStroke();
}

function preload() {
  // preload() runs once
  hero = loadImage("hero.png");
  food = loadImage("food.png");
}

function draw() {
  background("#0FCBF7");
  hero.resize(0, 300);
  image(hero, x, y);
  food.resize(0, 75);
  image(food, foodX, foodY);
  fill(255, 0, 0);

  //Движение врага
  if (x > enemyX) {
    enemyX = enemyX + 1;
  } else if (x < enemyX) {
    enemyX = enemyX - 1;
  }
  if (y > enemyY) {
    enemyY = enemyY + 1;
  } else if (y < enemyY) {
    enemyY = enemyY - 1;
  }

  rect(enemyX, enemyY, 80, 80);

  //Функция, чтобы герой ел еду
  if (x > foodX - 100 && x < foodX + 50) {
    if (y > foodY - 100 && y < foodY + 50) {
      foodX = random(100, 700);
      foodY = random(100, 700);
      dHealth = dHealth + 20;
      println(health);
    }
  }

  //оставшиеся жизни
  //fill(#8E5CC1);
  //health = 100 - 5 * millis()/1000 + dHealth;
  //if (health < 20) {
  //  fill(250, 0, 0);
  //}
  //rect(width - 130, 30, health, 100, 30);

  //условие поражения
  if (health < 0) {
    textSize(60);
    text("Оу,ты проиграл", 30, 40);
  } else {
    //оставшиеся жизни
    fill(0, 250, 0);
    health = 100 - (5 * millis()) / 1000 + dHealth;
    if (health < 20) {
      fill(250, 0, 0);
    }
    if (health > 100) {
      health = 100;
    }
    rect(width - 130, 30, health, 100, 30);
  }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    x = x + dx;
  } else if (keyCode == LEFT_ARROW) {
    x = x - dx;
  } else if (keyCode == UP_ARROW) {
    y = y - dy;
  } else if (keyCode == DOWN_ARROW) {
    y = y + dy;
  }
}
