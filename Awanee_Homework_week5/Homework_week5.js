// Week 5 homework by Awanee and Roshel


let serial; // variable to hold an instance of the serialport library
let portName = '/dev/tty.usbserial-1110';
// let inData1 = 0; 
// let inData2 = 0;
let options = { baudrate: 9600}; // change the data rate to whatever you wish
let sensors = [0, 0]


 
function setup() {
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', gotData);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
 
  serial.list(); // list the serial ports
  serial.open(portName, options);     // open a serial port
  
  
  createCanvas(800, 800);
  background(135, 206, 250);
  noStroke();
//   let msky = color(135, 206, 250);
//   let nsky = color(76, 53, 179);
//   let mbuilding = color(220, 220, 220);
//   let nbuilding = color(32, 32, 32);
//   let mwindow = color(100, 100, 100);
//   let nwindow = color(255, 255,153);
  
  
}
 
// get the list of ports:
function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    console.log(i + portList[i]);
  }
}
function serverConnected() {
  console.log('connected to server.');
}
 
function portOpen() {
  console.log('the serial port opened.')
}
 
// function serialEvent() {
//   inData1 = serial.readLine();
//   inData2 = serial.readLine();
 
// }
 
function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  console.log('The serial port closed.');
}

function gotData() {
  let currentString = serial.readLine(); // store the data in a variable
  trim(currentString); // get rid of whitespace
  if (!currentString) return; // if there's nothing in there, ignore it
  sensors = split(currentString, ',');
  console.log(sensors);
  serial.write('A');
}

function buildings(){
    rect(25,  300, 165, 650);
    rect(200, 500, 225, 475);
    rect(430, 100, 200, 800);
    rect(645, 400, 140, 500);
  }
function windows(){
  
  rect(40,  315, 60, 60);
  rect(115, 315, 60, 60);
  rect(40,  390, 60, 60);
  rect(115, 390, 60, 60);
  rect(40,  465, 60, 60);
  rect(115, 465, 60, 60);
  rect(40,  540, 60, 60);
  rect(115, 540, 60, 60);
  rect(40,  615, 60, 60);
  rect(115, 615, 60, 60);
  rect(40,  690, 60, 60);
  rect(115, 690, 60, 60);
  rect(40,  765, 60, 60);
  rect(115, 765, 60, 60);
 
  rect(215, 515, 90, 90);
  rect(320, 515, 90, 90);
  rect(215, 620, 90, 90);
  rect(320, 620, 90, 90);
  rect(215, 725, 90, 90);
  rect(320, 725, 90, 90);
  
  rect(445, 115, 170, 100);
  rect(445, 230, 170, 100);
  rect(445, 345, 170, 100);
  rect(445, 460, 170, 100);
  rect(445, 575, 170, 100);
  rect(445, 690, 170, 100);
  
  rect(675, 425, 80, 90);
  rect(675, 545, 80, 90);
  rect(675, 665, 80, 90);
}


function Day (){
  background(135, 206, 250);
  fill(255, 255,153);
  ellipse(225, 150, 100, 100);
  cloud();
  fill (220, 220, 220);
  buildings();
  fill(100, 100, 100);
  windows(); 
}

function Night (){
  background(76, 53, 179);
  fill(224, 224,224);
  ellipse(225, 150, 100, 100);
  fill(76, 53, 179);
  ellipse(250, 125, 100, 100);
  fill (32, 32, 32);
  buildings();
  fill(255, 255,153);
  windows(); 
}

function cloud(){
  var pos = map(sensors[1], 0, 255, 0, 800);
  fill(255,255,255)
  ellipse(pos+100,200,60,60);
  ellipse(pos+80,180,60,60);
  ellipse(pos+120,160,60,60);
  ellipse(pos+140,200,60,60);
  ellipse(pos+180,190,60,60);
  ellipse(pos+150,170,60,60);
}

function draw() {
   // background(0);
   // fill(255);
   
  if (sensors[0] == 0){
    
    Day();
    text("Day: " + sensors[0], 30, 50);
    cloud();
    
  } else {
    Night();
    text("Night: " + sensors[0], 30, 50);
    cloud();

  }
}


// this is the Arduino code

// int button = 0;
// int potentiometer = 0;

// void setup() {
//   pinMode(2, INPUT);
//   Serial.begin(9600); // initialize serial communications
// }
 
// void loop() {
//   // read the input pin:
//   button = map(digitalRead(2), 0, 1, 0, 255);
//   //Serial.println(button);
//   int potentiometer = analogRead(A0);
//   int mappedPot = map(potentiometer, 0, 1023, 0, 255); 
//   // print it out the serial port:
  
  
//   Serial.print(button); 
//   Serial.print(",");
//   Serial.println(mappedPot);                
//   // remap the pot value to fit in 1 byte:
//   delay(50);  
  
  
// }