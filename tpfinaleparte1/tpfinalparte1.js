let escenas = [];
let texto= [];


function preload() {
  for (let i = 0; i < 21; i++) {
    escenas[i] = loadImage("data/escena" + i + ".jpg");
  }
  sonidoClick = loadSound("data/sonidoclick.mp3");
  texto = loadStrings ("data/dialogo.txt");
  musicaEscena5 = loadSound("data/musicaEscena5.mp3"); // Música para la escena 5
  musicaEscena7 = loadSound("data/musicaEscena7.mp3"); // Música para la escena 7
  musicaEscena6 = loadSound("data/musicaEscena5.mp3"); // Música para la escena 6, igual a la 5ta
}

function setup() {
  createCanvas(640, 480);
  estado = "inicio";
}

function draw() {
  background(200);

  if (estado === "inicio") {
    cargaOtroFondo(escenas[0], 0, 0, width, height);
    textSize(30);
    noStroke();
    fill(213, 232, 234);
    rect (0, 0, 640, 55);
    fill(0);
    textAlign(CENTER);
    text("Dora:", width/2, 20);
    textSize(20);
    text("Aventura Navideña", width/2, 45);
    fill(255);
    fill(213, 232, 234);
    rect(0, 380, 640, 170);
    dibujarBoton(240, height - 80, 150, 60, "Empecemos");
  } else if (estado === "primera") {
    cargaOtroFondo(escenas[1], 0, 0, width, 400);
    cargaTexto(0);
    dibujarBoton(40, height - 75, 200, 60, "Pide ayuda a Botas");
    dibujarBoton(400, height - 75, 200, 60, "Ve sola al bosque");
  } else if (estado === "segunda") {
    cargaOtroFondo(escenas[2], 0, 0, width, 360);
    cargaTexto(1);
    dibujarBoton(40, height - 80, 200, 60, "A la mochila");
    dibujarBoton(400, height - 80, 200, 60, "Al mapa");
  } else if (estado === "tercera") {
    cargaOtroFondo(escenas[3], 0, 0, width, 360);
    cargaTexto(2);
    dibujarBoton(40, height - 80, 200, 60, "Mirar la mochila");
    dibujarBoton(400, height - 80, 200, 60, "Pedir ayuda al mapa");
  } else if (estado === "cuarta") {
    cargaOtroFondo(escenas[4], 0, 0, width, 350);
    cargaTexto(3);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
  } else if (estado === "quinta") {
    cargaOtroFondo(escenas[5], 0, 0, width, 350);
    cargaTexto(4);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
    if (!musicaEscena5.isPlaying()) {
      musicaEscena5.play();
    }
  } else if (estado === "sexta") {
    cargaOtroFondo(escenas[6], 0, 0, width, 350);
    cargaTexto(5);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
    if (!musicaEscena6.isPlaying()) {
      musicaEscena6.play();
    }
  } else if (estado === "septima") {
    cargaOtroFondo(escenas[7], 0, 0, width, 380);
    cargaTexto(6);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
    if (!musicaEscena7.isPlaying()) {
      musicaEscena7.play();
    }
  } else if (estado === "octava") {
    cargaOtroFondo(escenas[8], 0, 0, width, 420);
    cargaTexto(7);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
    musicaEscena7.stop();
  } else if (estado === "novena") {
    cargaOtroFondo(escenas[9], 0, 0, width, 420);
    cargaTexto(8);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
    musicaEscena5.stop();
    musicaEscena6.stop();
  } else if (estado === "decima") {
    cargaOtroFondo(escenas[10], 0, 0, width, 450);
    cargaTexto(9);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
  } else if (estado === "onceava") {
    cargaOtroFondo(escenas[11], 0, 0, width, 350);
    cargaTexto(10);
    dibujarBoton(40, height - 80, 200, 60, "Seguir las huellas");
    dibujarBoton(400, height - 80, 200, 60, "Seguir indicaciones");
  } else if (estado === "doceava") {
    cargaOtroFondo(escenas[12], 0, 0, width, 350);
    cargaTexto(11);
    dibujarBoton(40, height - 80, 200, 60, "Ignorarlo");
    dibujarBoton(400, height - 80, 200, 60, "Resolver acertijo");
  } else if (estado === "treceava") {
    cargaOtroFondo(escenas[13], 0, 0, width, 325);
    cargaTexto(12);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
  } else if (estado === "catorceava") {
    cargaOtroFondo(escenas[14], 0, 0, width, 350);
    cargaTexto(13);
    dibujarBoton(240, height - 80, 150, 60, "Créditos");
  } else if (estado === "quinceava") {
    cargaOtroFondo(escenas[15], 0, 0, width, 350);
    cargaTexto(14);
    dibujarBoton(240, height - 80, 150, 60, "Créditos");
  } else if (estado === "dieciseisava") {
    cargaOtroFondo(escenas[16], 0, 0, width, 350);
    cargaTexto(15);
    dibujarBoton(40, height - 80, 200, 60, "Pedirles ayuda");
    dibujarBoton(400, height - 80, 200, 60, "Seguir sola");
  } else if (estado === "diecisieteava") {
    cargaOtroFondo(escenas[17], 0, 0, width, 350);
    cargaTexto(16);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
  } else if (estado === "dieciochoava") {
    cargaOtroFondo(escenas[18], 0, 0, width, 350);
    cargaTexto(17);
    dibujarBoton(240, height - 75, 150, 60, "Siguiente");
  } else if (estado === "diecinueveava") {
    cargaOtroFondo(escenas[19], 0, 0, width, 350);
    cargaTexto(18);
    dibujarBoton(240, height - 75, 150, 60, "Créditos");
  } else if (estado === "veinteava") {
    cargaOtroFondo(escenas[20], 0, 0, width, 350);
    fill(213, 232, 234);
    rect(0, 350, 640, 160);
    dibujarBoton(240, height - 75, 150, 60, "Volver al Inicio");
    textAlign(CENTER);
    fill(255);
    textSize(22);
    text("Ana Belen Cotleroff", 195, 210);
    text("Comision 2 - 2024.", 195, 230);
    text("Legajo:120292/7 .", 195, 250);

    text("Brunella Brancaleone", 440, 210);
    text("Comision 2 - 2024.", 440, 230);
    text("Legajo: 118976/9.", 440, 250);
  }
}

function cargaTexto(indice) {
  textSize(18);
  noStroke();
  fill(213, 232, 234);
  rect(0, 330, 640, 170);
  fill(0);
  text (texto[indice], 25, 345, 580);
}

function mousePressed() {
  if (estado === "inicio") {
    if (detectarBoton(240, height - 80, 120, 60)) { //(PANTALLA INICIO) te lleva a la aventura
      sonidoClick.play(); // Reproducir sonido
      estado = "primera";
    }
  } else if (estado === "primera") {
    if (detectarBoton(20, height - 100, 200, 60)) { //(PANTALLA DE AVENTURA) opciones de ir con botas
      sonidoClick.play(); // Reproducir sonido
      estado = "segunda";
    } else if (detectarBoton(420, height - 100, 200, 60)) { // o ir sola al bosque
      sonidoClick.play(); // Reproducir sonido
      estado = "tercera";
    }
  } else if (estado === "tercera") { //(pantalla de dora nerviosa pero decidida) tiene que decidir si pedir ayuda al mapa
    if (detectarBoton(420, height - 100, 200, 60)) {
      sonidoClick.play(); // Reproducir sonido
      estado = "quinta";
    }
    if (detectarBoton(20, height - 100, 200, 60)) { // (pantalla de dora nerviosa pero decidida) o ir sola
      sonidoClick.play(); // Reproducir sonido
      estado = "cuarta";
    }
  } else if (estado === "decima") {
    if (detectarBoton(240, height - 80, 120, 60)) { //(PANTALLA DE ATAJO CORTO Y PELIGROSO) te lleva a Bosque de los sueños
      sonidoClick.play(); // Reproducir sonido
      estado = "novena";
    }
  } else if (estado === "segunda") {
    if (detectarBoton(420, height - 100, 200, 60)) { //(PANTALLA DE BOTAS ENTUSIASMADO)te lleva a opciones de consultar mapa
      sonidoClick.play(); // Reproducir sonido
      estado = "sexta";
    }
    if (detectarBoton(20, height - 100, 200, 60)) { //(PANTALLA DE BOTAS ENTUSIASMADO) o revisa la mochila
      sonidoClick.play(); // Reproducir sonido
      estado = "septima";
    }
  } else if (estado === "cuarta") {
    if (detectarBoton(240, height - 80, 120, 60)) { //(PANTALLA DE MOCHILA NO ENCUENTRA NADA EN ELLA) te lleva ver el mapa
      sonidoClick.play(); // Reproducir sonido
      estado = "decima";
    }
  } else if (estado === "quinta") {
    if (detectarBoton(240, height - 80, 120, 60)) { //(PANTALLA DE AYUDA DEL MAPA (camino largo)) te lleva a Bosque de los sueños
      sonidoClick.play(); // Reproducir sonido
      estado = "novena";
    }
  } else if (estado === "sexta") {
    if (detectarBoton(240, height - 80, 120, 60)) { //(PANTALLA DE AYUDA DEL MAPA (atajo)) te lleva a Bosque de los sueños
      sonidoClick.play(); // Reproducir sonido
      estado = "novena";
    }
  } else if (estado === "septima") {
    if (detectarBoton(240, height - 80, 120, 60)) { //(PANTALLA DE DULCE NAVIDEÑO) te lleva a consultar el mapa
      sonidoClick.play(); // Reproducir sonido
      estado = "octava";
    }
  } else if (estado === "octava") {
    if (detectarBoton(240, height - 80, 120, 60)) { //(PANTALLA DE DULCE NAVIDEÑO) te lleva a consultar el mapa
      sonidoClick.play(); // Reproducir sonido
      estado = "novena";
    }
  } else if (estado === "novena") { //(pantalla de BOSQUE DE LOS SUEÑOS) va a las opciones de huellas o camino
    if (detectarBoton(240, height - 80, 120, 60)) {
      sonidoClick.play(); // Reproducir sonido
      estado = "onceava";
    }
  } else if (estado === "onceava") {
    if (detectarBoton(420, height - 100, 200, 60)) { //(PANTALLA DE DECISION)SEGUIR HUELLAS
      sonidoClick.play(); // Reproducir sonido
      estado = "dieciseisava";
    }
    if (detectarBoton(20, height - 100, 200, 60)) { //(PANTALLA DE DECISION) o SEGUIR INDICACIONES
      sonidoClick.play(); // Reproducir sonido
      estado = "doceava";
    }
  } else if (estado === "doceava") {
    if (detectarBoton(420, height - 100, 200, 60)) { // boton para que dora sea dejada en paz por el zorro
      sonidoClick.play(); // Reproducir sonido
      estado = "treceava";
    }
    if (detectarBoton(20, height - 100, 200, 60)) { // FIN: Dora muere
      sonidoClick.play(); // Reproducir sonido
      estado = "catorceava";
    }
  } else if (estado === "treceava") {
    if (detectarBoton(240, height - 80, 150, 60)) { // FIN: Dora llega al regalo
      sonidoClick.play(); // Reproducir sonido
      estado = "quinceava";
    }
  } else if (estado === "dieciseisava") {
    if (detectarBoton(420, height - 100, 200, 60)) { // boton para que dora se vaya alejando del bosque...
      sonidoClick.play(); // Reproducir sonido
      estado = "dieciochoava";
    }
    if (detectarBoton(20, height - 100, 200, 60)) { // boton para que dora sea ayudada por los animales
      sonidoClick.play(); // Reproducir sonido
      estado = "diecisieteava";
    }
  } else if (estado === "diecisieteava") {
    if (detectarBoton(240, height - 80, 150, 60)) { // FIN: Dora llega al regalo
      sonidoClick.play(); // Reproducir sonido
      estado = "quinceava";
    }
  } else if (estado === "dieciochoava") {
    if (detectarBoton(240, height - 80, 150, 60)) { // FIN: Dora se pierde por siempre
      sonidoClick.play(); // Reproducir sonido
      estado = "diecinueveava";
    }
  } else if (estado === "catorceava") {
    if (detectarBoton(240, height - 80, 150, 60)) { // ir a creditos
      sonidoClick.play(); // Reproducir sonido
      estado = "veinteava";
    }
  } else if (estado === "quinceava") {
    if (detectarBoton(240, height - 80, 150, 60)) { // ir a creditos
      sonidoClick.play(); // Reproducir sonido
      estado = "veinteava";
    }
  } else if (estado === "diecinueveava") {
    if (detectarBoton(240, height - 80, 150, 60)) { // ir a creditos
      sonidoClick.play(); // Reproducir sonido
      estado = "veinteava";
    }
  } else if (estado === "veinteava") {
    if (detectarBoton(240, height - 80, 150, 60)) { // volverrrrrrrr al inicio siiiii
      sonidoClick.play(); // Reproducir sonido
      estado = "inicio";
    }
  }
}



function dibujarBoton(px, py, pan, pal, texto) {
  if (detectarBoton(px, py, pan, pal)) {
    fill(255, 0, 0);
  } else {
    fill(0, 0, 100);
  }
  rect(px, py, pan, pal, pal / 4);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(texto, px + pan / 2, py + pal / 2);
}

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}



function cargaOtroFondo(imag, x, y, ancho, alto) {
  image(imag, x, y, ancho, alto);
}
