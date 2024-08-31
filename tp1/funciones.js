function grilla (posXcuad, posYcuad, tamcuad, b, n, cuadr) {
  
  for ( var i = 0; i < 20; i++) {
    for ( var j = 0; j < 20; j++) {
      fill(b);
      
      posXcuad= 400 + i*tamcuad;
      posYcuad= j*tamcuad;
      
      var centroX = posXcuad + tamcuad / 2;
      var centroY = posYcuad + tamcuad / 2;

      var tono = map (mouseX, 0, width*10, 0, 255);
      var d = dist(mouseX, mouseY, centroX, centroY);
      
      if (d < 35) {  
        fill(cuadr);
      } else {
        fill(b);
      }
      
      if (i % 2 == 0 && j % 2 != 0) {
        fill(n);
        if (mouseIsPressed == true) {
          fill(cuadr);
        }
      }
      if (i % 2 != 0 && j % 2 == 0) {
        fill(n);
        if (mouseIsPressed == true) {
          fill(cuadr);
        }
      }
      rect (posXcuad, posYcuad, tamcuad, tamcuad);

      if ( i % 2 == 0 && j % 2 == 0) {
        fill(tono);
        var posXCircu = posXcuad + tamcuad/2;
        var posYCircu = posYcuad + tamcuad/2;
        ellipse (posXCircu, posYCircu, tamcuad, tamcuad);
      } else if ( i % 2 != 0 && j % 2 != 0) {
        fill(tono);
        var posXCircu = posXcuad + tamcuad/2;
        var posYCircu = posYcuad + tamcuad/2;
        ellipse (posXCircu, posYCircu, tamcuad, tamcuad);
      }
    }
  }
}
