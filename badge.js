// Enable 'Set Current Time' in Settings -> Communications before sending
require("Font8x16").add(Graphics);
require("Font6x8").add(Graphics);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const name = 'Nik Martin';

console.log('h:', g.getHeight());
console.log('w', g.getWidth());

LED1.reset();
function onSecond() {
  // Called every second
  var t = new Date(); // get the current date and time
  g.clear();

  // Draw the time

  g.setFont6x8();
  let time = `${days[t.getDay()]},${months[t.getMonth()]}`;
  g.drawString(time, 95 - g.stringWidth(time), 0);

  g.flip();
}

const createBackground = () => {

  g.clear();
  g.setFont8x16();
  g.drawString("Hello", 95 - g.stringWidth('Hello'), 5);
  g.drawString(name, 95 - g.stringWidth(name), 22);
  g.drawString("-- Espruino --", 0, 48);
  g.setFontBitmap();
  background = new Uint8Array(g.buffer.length);
  background.set(new Uint8Array(g.buffer));
}

// Call onSecond every second
createBackground();
setInterval(onSecond, 1000);

/*

// Two variables to update
var boolean = false;
var number = 50;
// First menu
var mainmenu = {
  "" : {
    "title" : "-- Main Menu --"
  },
  "Backlight On" : function() { LED1.set(); },
  "Backlight Off" : function() { LED1.reset(); },
  "Submenu" : function() { Pixl.menu(submenu); },
  "A Boolean" : {
    value : boolean,
    format : v => v?"On":"Off",
    onchange : v => { boolean=v; }
  },
  "A Number" : {
    value : number,
    min:0,max:100,step:10,
    onchange : v => { number=v; }
  },
  "Exit" : function() { Pixl.menu(); },
};
// Submenu
var submenu = {
  "" : {
    "title" : "-- SubMenu --"
  },
  "One" : undefined, // do nothing
  "Two" : undefined, // do nothing
  "< Back" : function() { Pixl.menu(mainmenu); },
};
// Actually display the menu
Pixl.menu(mainmenu);
*/
