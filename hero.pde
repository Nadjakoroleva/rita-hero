PImage hero, food;
float x, y, x2, y2, foodX, foodY, enemyX, enemyY;
int dx = 5;
int dy = 5;
int health, dHealth;


void setup() {
  size (800, 800);
  hero = loadImage("hero.png");
  food = loadImage("food.png");
  foodX = random (100, 700);
  foodY = random (100, 700);
  enemyX = random(350, 700);
  enemyY = random(350, 700);
  noStroke();
}

void draw() {
  background(#0FCBF7);
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
      foodY = random (100, 700);
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
    health = 100 - 5 * millis()/1000 + dHealth;
    if (health < 20) {
      fill(250, 0, 0);
    }
    if (health > 100) {
      health = 100;
    }
    rect(width - 130, 30, health, 100, 30);
  }
}

void keyPressed() {
  if (keyCode == RIGHT) {
    x = x + dx;
  } else if (keyCode == LEFT) {
    x = x - dx;
  } else if (keyCode == UP) {
    y = y - dy;
  } else if (keyCode == DOWN) {
    y = y + dy;
  }
}
