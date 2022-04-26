function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES) //Coloca para o utilzar a unidade grau nos ângulos 
  }

  //Quando o mouse chega na parte de cima da cabeça a orelha deve levantar um pouco
  //Com o mouse na parte da boca a lingua aparece

  function draw() {
    
    background(220);
    //rosto
    noStroke()
    fill (205, 133, 63);
    ellipse(200, 200, 200, 170);
    
    
    
    //olhos
    fill(0);
    ellipse(230, 190, 30, 30);
    ellipse(170, 190, 30, 30);
    
    //brilho nos olhos
    noStroke();
    fill(250);
    ellipse(163, 185, 10, 10);
    ellipse(225, 185, 10, 10);
    
    //nariz
    fill (0)
    rect(185, 205, 30, 30, 10, 10, 15, 15);
    
    //orelhas
    fill(139, 69, 19);
    ellipse(120, 200, 50, 130);
    ellipse(280, 200, 50, 130);
    
    //boca
    noFill();
    stroke (0);
    strokeWeight(4);
    arc(215, 225, 40, 40, 15,135);
    arc(185, 225, 40, 40, 0,160);
    
    
    //Levantar orelha
    if (mouseY > 100 && mouseY < 200 && mouseX > 100 && mouseX < 300 ) {
      background(220);
      
      //rosto
      noStroke()
      fill (205, 133, 63);
      ellipse(200, 200, 200, 170);
  
      //olhos
      fill(0);
      ellipse(230, 190, 30, 30);
      ellipse(170, 190, 30, 30);
  
      //brilho nos olhos
      noStroke();
      fill(250);
      ellipse(163, 185, 10, 10);
      ellipse(225, 185, 10, 10);
      
      //nariz
      fill (0)
      rect(185, 205, 30, 30, 10, 10, 15, 15);
      
      //boca
      noFill();
      stroke (0);
      strokeWeight(4);
      arc(215, 225, 40, 40, 15,135);
      arc(185, 225, 40, 40, 0,160);
      
      //orelhas
      noStroke()
      fill(139, 69, 19);
      push(); //Inicia um novo drawing state
      /*Rotate rotaciona em relação ao ponto de origem, para que a elipse representando a orelha 
      rotacione em relação a sua ponta é necessário utilizar translate para redirecionar o ponto de origem*/
      translate (110, 200) 
      rotate(30) 
      ellipse(0, 0, 50, 130);
      pop(); //Restaura o drawing state original 
  
      push();
      translate(300, 200);
      rotate(-30);
      ellipse(0, 0, 50, 130);
      pop();
      
      
      
    }
    
    //Aparecer lingua
    if (mouseY > 200 && mouseY < 300 && mouseX >150 && mouseX < 250) {
      //lingua
      fill(205, 92, 92);
      noStroke()
      ellipse(200, 265, 20, 45);
  
      
      //olhos
      fill(0);
      ellipse(230, 190, 30, 30);
      ellipse(170, 190, 30, 30);
  
      //brilho nos olhos
      noStroke();
      fill(250);
      ellipse(163, 185, 10, 10);
      ellipse(225, 185, 10, 10);
      
      //nariz
      fill (0)
      rect(185, 205, 30, 30, 10, 10, 15, 15);
      
      //boca
      noFill();
      stroke (0);
      strokeWeight(4);
      arc(215, 225, 40, 40, 15,135);
      arc(185, 225, 40, 40, 0,160);
      
    }
  
  }