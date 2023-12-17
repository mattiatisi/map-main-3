var sample;
let x;
let y;
let mapImg;
let pinIcon;
let velX = 0;
let velY = 0;
let doa = 1;
let pinPosX;
let pinPosY;
let wiW;
let wiH;
let imgW;
let imgH;
let nm;
let ab;
let myData;
var button1;
var moveToHalf;
let justOnePin;
var textArea;
var form;

function preload() {
  mapImg = loadImage('../assets/Map.png');
  pinIcon = loadImage('../assets/Icons/pin.png');
  myData = loadJSON('data.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sample = new SampleSystem();
  ab = 0;
  while (mapImg.width / (windowWidth / ab) <= windowWidth + windowWidth / 8
    || mapImg.height / (windowHeight / ab) <= windowHeight + windowHeight / 8) ++ab;
  wiW = windowWidth;
  wiH = windowHeight;
  imgW = mapImg.width;
  imgH = mapImg.height;
  nm = 0;
  mapImg.resize(imgW / (windowWidth / ab), 0);
  ab = 0;
  for (var n = 0; n < myData.xPos.length; ++n) {
    sample.create(myData.xPos[n], myData.yPos[n], myData.word[n]);
    sample.createText(myData.word[n]);
  }
  button1 = select("#openModal");
  moveToHalf = 0;
  justOnePin = 0;
  textArea = document.getElementById('textId');
  form = document.getElementById('formId');
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  if (wiW != windowWidth || wiH != windowHeight) {
    while (nm <= 1) {
      while (imgW / (windowWidth / ab) <= windowWidth + windowWidth / 8
        || mapImg.height / (windowHeight / ab) <= windowHeight + windowHeight / 8) ++ab;
      mapImg.resize(imgW / (windowWidth / ab), 0);
      ab = 0;
      ++nm;
    }
  }
  else { nm = 0; }
  button1.mousePressed(stateOne);
  searchMap(0, 0, 2, moveToHalf);
  sample.hoverText(mouseX - pinPosX, mouseY - pinPosY, moveToHalf);


  form.addEventListener('submit',function(event){
    //this event must be chreated when pressing the submit button.
    sample.createText(textArea.value);
  
    //IMPORTANT: This are the values this will be uploaded to the json file
    // once the submit is pressed.
    console.log(sample.text[sample.text.length-1]);
    console.log(sample.samples[sample.samples.length-1].x);
    console.log(sample.samples[sample.samples.length-1].y);
  });
}


function stateOne() {
  moveToHalf = 1;
}

function searchMap(x, y, acel, half) {
  push();
  translate(-10, -10);
  x = x + velX;
  y = y + velY;
  image(mapImg, x, y);
  if (mouseX < windowWidth / 2 - windowWidth / 4) {
    if (half == 1) {
      if (x >= windowWidth / 2) {
        velX = velX;
        image(mapImg, x, y);
      } else {
        velX = velX + acel;
        image(mapImg, x, y);
      }
    } else {
      {
        if (x >= 0) {
          velX = velX;
          image(mapImg, x, y);
        } else {
          velX = velX + acel;
          image(mapImg, x, y);
        }
      }
    }
  }
  if (mouseX > windowWidth / 2 + windowWidth / 4) {
    if (x + mapImg.width <= windowWidth) {
      velX = velX;
      image(mapImg, x, y);
    } else {
      velX = velX - acel;
      image(mapImg, x, y);
    }
  }
  if (mouseY < windowHeight / 2 - windowHeight / 4) {
    if (y >= 0) {
      velY = velY;
      image(mapImg, x, y);
    } else {
      velY = velY + acel;
      image(mapImg, x, y);
    }
  }
  if (mouseY > windowHeight / 2 + windowHeight / 4) {
    if (y + mapImg.height <= windowHeight) {
      velY = velY;
      image(mapImg, x, y);
    } else {
      velY = velY - acel;
      image(mapImg, x, y);
    }
  }
  sample.draw(x, y);
  pinPosX = x;
  pinPosY = y;
  pop();
}

function mousePressed() {
    if (mouseX >= windowWidth / 2 && moveToHalf == 1 && justOnePin < 1) {
      sample.create(mouseX - pinPosX, mouseY - pinPosY);
      ++justOnePin;
    }
}

function keyTyped() {
  if (key === "n") {
    //setup();
  }
}