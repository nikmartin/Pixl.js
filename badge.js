// Enable 'Set Current Time' in Settings -> Communications before sending

// Niks Pixl.js Badge
require("Font8x16").add(Graphics);
require("Font6x8").add(Graphics);
require("FontSinclair").add(Graphics);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const welcome1 = "HELLO";
const welcome2 = "MY NAME IS";
const name = "Nik Martin";
const company = "Open Frame LLC";
const h = g.getHeight();
const w = g.getWidth();

const createBackground = () => {
  g.clear();
  g.setFont8x16();
  g.drawString(welcome1, (w - g.stringWidth(welcome1)) / 2, -2);
  g.setFontSinclair();
  g.drawString(welcome2, (w - g.stringWidth(welcome2)) / 2, 10);
  g.drawLine(0, 18, w, 18);
  g.setFont8x16();
  g.drawString(name, (w - g.stringWidth(name)) / 2, 26);
  g.setFont6x8();
  g.drawString(company, (w - g.stringWidth(company)) / 2, 48);
  g.setFontBitmap();
  g.flip();
};

const onTimer = () => {
  g.setColor(0, 0, 0);
  g.fillRect(0, 55, 128, 64);
  g.setColor(1, 1, 1);
  let d = new Date();
  g.setFontBitmap();
  let t = days[d.getDay()] + "," + months[d.getMonth()] + " " + d.getDate() + " " + d.getHours() + ":" + d.getMinutes();
  g.drawString(t, 0, 58);
  let temp = (9 * E.getTemperature() / 5 + 32).toFixed(1) + "f";

  g.drawString(temp, g.getWidth() - g.stringWidth(temp), 58);

  g.flip();
};
createBackground();
setInterval(onTimer, 5000); // 5
onTimer();
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
