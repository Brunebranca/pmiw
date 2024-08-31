//https://youtu.be/Zm3q57b9GfY
// perdon por el audio de el video, la compu hace ruido y se veia reflejado en el mic, saludos

let opart;
let posXcuad;
let posYcuad;
let tamcuad;
let b;
let n;
let cuadr;

function preload() {
  opart= loadImage('data/imagen.jpg');
}

function setup() {
  createCanvas (800, 400);
  

  tamcuad=20;
  b= color(255);
  n= color (0);
  cuadr = color (random (128), random (0), random (0));
}

function draw() {
  background (255);
  image(opart, 0, 0);
  noStroke();

  //cuadricula
  grilla (posXcuad, posYcuad, tamcuad, b, n, cuadr);

  //estados
  if ((keyIsPressed === true) && (key === '+')) {
    tamcuad++;
  }
  if ((keyIsPressed === true) && (key === '-') && (tamcuad > 20)) {
    tamcuad--;
  }
  if (reiniciar(key)) {
    reinicioDeVar();
  }
}

function mousePressed(){
  cuadr = color(random(127), random(0), random(0));
}
function reiniciar(tecla) {
  return tecla === 'r';
}
function reinicioDeVar (){
      tamcuad = 20;
      b= color(255);
      n= color (0);
      cuadr= color (0);
      mouseY = 0;
      mouseX = 0;
}
function keyPressed(){
    if (key === 'r') {    
    reinicioDeVar();
  }
}
