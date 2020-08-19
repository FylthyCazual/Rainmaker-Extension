// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, random, background, fill, color, rect, ellipse, square,
stroke, noStroke, noFill, strokeWeight, colorMode,  width, height, text, HSB,
line, mouseX, mouseY, mouseIsPressed */


let mySound;
let drop1x, drop1y, drop1d, drop1FallSpeed, drop2x, drop2y, drop2d, drop2FallSpeed;
let drop1, drop2, drop3, drop4;
let drops = [];
let particles = [];

function setup() {
  //getAudioContext().suspend();
  
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  noStroke();
  
  for(let i = 0; i < 100; i++){
    drops.push(new RainDrop()); 
  }
  for(let i = 0; i < 40; i++){
    particles.push(new Mist()); 
  }
  
}



function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  
  
  
  noStroke();
  for(let i = 0; i < drops.length; i++){
    drops[i].move();
  }
  stroke(100);
  strokeWeight(1);
  for(let i = 0; i < particles.length; i++){
    particles[i].move();
  }
}

class RainDrop{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.d = random(1,15);
    this.driftSpeed = random(-1,1) / 2;
    this.fallSpeed = random(8,20);
    this.s = random(50,100);
  }
  
  move(){
    this.x += this.driftSpeed;
    this.y += this.fallSpeed;
    if(this.y > height){
      this.x = random(width);
      this.y = 0;
      this.d = random(1,15);
      this.driftSpeed = random(-1,1) / 2;
      this.fallSpeed = random(8,20);  
      this.s = random(50,100);
    }
    fill(60,this.s,80);
    ellipse(this.x,this.y,this.d);
  }
}

class Mist{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.d = random(15,20);
    this.driftSpeed = random(1,3) / 10;
    this.h = random(45,55);
    this.s = random(45,55);
    this.o = random(10,30);
  }
  move(){
    this.y += this.driftSpeed;
    this.o -= 0.1;
    if(this.o < 0){
      this.x = random(width);
      this.y = random(height);
      this.d = random(15,20);
      this.driftSpeed = random(1,3) / 10;
      this.h = random(45,55);
      this.s = random(45,55); 
      this.o = random(10,30);
    }
    fill(this.h,this.s,80, this.o);
    ellipse(this.x,this.y,this.d);
    }
}


