class SampleSystem {

  constructor() {
    this.samples = [];
    this.text = [];
  }

  create(x, y) {
    //Arreglos paralelos. 
      this.samples.push(createVector(x, y));
  }
  createText(word) {
    //Arreglos paralelos. 
      this.text.push(word);
  }

  draw(w, m) {
    for (var n = 0; n < this.samples.length; ++n) {
      this.pin(this.samples[n].x + w, this.samples[n].y + m);
    }
  }

  dataPrint() {
    for (var n = 0; n < this.samples.length; ++n) {
      console.log(this.samples[n].x, this.samples[n].y);
      console.log(this.text[n]);
    }
  }

  //arr.splice(4, 1);
  //let d = dist(x1, y1, x2, y2);
  hoverText(x, y, inHalf) {
    for (var n = 0; n < this.samples.length; ++n) {
      if (dist(x, y, this.samples[n].x, this.samples[n].y) <= pinIcon.width / 2 && inHalf != 1) {
        this.drawText(mouseX, mouseY, this.text[n]);
        return true;
      }
    }
  }

  drawText(x, y, texto) {
    push();
    translate(pinIcon.width / 6, pinIcon.width / 6);
    fill(0);
    square(x, y, windowWidth / 8, 20);
    fill(255);
    textFont("ReplicaTrialTT-RegularTrial.ttf");
    textWrap(WORD);
    textAlign(CENTER, CENTER);
    text(texto, x, y, windowWidth / 8, windowHeight / 8);
    pop();
  }

  //えがく (aquii se dibuja el pin.)
  pin(x, y) {
    push(); // Start a new drawing state
    noStroke();
    fill(255, 83, 97);
    //circle(x,y,15); // Middle circle
    translate(-pinIcon.width / 8, -pinIcon.height / 2);
    image(pinIcon, x, y);
    pop();
  }

}
