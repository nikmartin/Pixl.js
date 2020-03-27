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


Graphics.prototype.setFont8x16 = function () {this.setFontCustom(a,32,b,16)};
Graphics.prototype.setFont6x8 = function () {this.setFontCustom(a,32,b,8)};
Graphics.prototype.setFont8x12 = function () {this.setFontCustom(a,32,b,12)};
Graphics.prototype.setFontSinclair = function () {this.setFontCustom(a,32,8,8)};
var $jscomp = { 
  "scope": {  }, 
  "createTemplateTagFirstArg": function (a) {return a.raw=a}, 
  "createTemplateTagFirstArgWithRaw": function (a,b) {a.raw=b;return a}
 };
var days = [ 
  "Sunday", 
  "Monday", 
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday", 
  "Saturday"
 ];
var months = [ 
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
 ];
var welcome1 = "HELLO";
var welcome2 = "MY NAME IS";
var name = "Nik Martin";
var company = "Open Frame LLC";
var h = 64;
var w = 128;
function onSecond() {var a=new Date;g.setFontBitmap();a=days[a.getDay()]+","+months[a.getMonth()]+" "+a.getDate();g.drawString(a,95-g.stringWidth(a),58);g.flip()}
function createBackground() {g.clear();g.setFont8x16();g.drawString(welcome1,(w-g.stringWidth(welcome1))/2,0);g.setFontSinclair();g.drawString(welcome2,(w-g.stringWidth(welcome2))/2,14);g.setFont6x8();g.drawString(company,(w-g.stringWidth(company))/2,48);g.setFontBitmap();background=new Uint8Array(g.buffer.length);background.set(new Uint8Array(g.buffer))}
var background = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 111, 239, 15, 7, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 102, 102, 6, 12, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 102, 38, 6, 12, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 102, 134, 6, 12, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 231, 134, 6, 12, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 102, 134, 6, 12, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 102, 6, 6, 12, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 102, 38, 38, 44, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 102, 102, 102, 108, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 111, 239, 239, 231, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 130, 0, 66, 60, 66, 126, 0, 62, 60, 0, 0, 0, 0, 0, 0, 102, 68, 0, 98, 66, 102, 64, 0, 8, 64, 0, 0, 0, 0, 0, 0, 90, 40, 0, 82, 66, 90, 124, 0, 8, 60, 0, 0, 0, 0, 0, 0, 66, 16, 0, 74, 126, 66, 64, 0, 8, 2, 0, 0, 0, 0, 0, 0, 66, 16, 0, 70, 66, 66, 64, 0, 8, 66, 0, 0, 0, 0, 0, 0, 66, 16, 0, 66, 66, 66, 126, 0, 62, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 7, 128, 0, 0, 16, 131, 128, 0, 0, 0, 0, 0, 0, 8, 128, 0, 4, 0, 0, 0, 16, 132, 64, 0, 0, 0, 0, 0, 0, 8, 184, 206, 4, 44, 205, 24, 16, 132, 0, 0, 0, 0, 0, 0, 0, 8, 165, 41, 7, 48, 42, 164, 16, 132, 0, 0, 0, 0, 0, 0, 0, 8, 165, 233, 4, 32, 234, 188, 16, 132, 0, 0, 0, 0, 0, 0, 0, 8, 185, 9, 4, 33, 42, 160, 16, 132, 64, 0, 0, 0, 0, 0, 0, 7, 32, 201, 4, 32, 234, 152, 30, 243, 128, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
function onTimer() {var a=(9*E.getTemperature()/5+32).toFixed(1)+"F";g.setFontBitmap();g.drawString(a,g.getWidth()-g.stringWidth(a),58);g.flip()}
setInterval(onTimer, 5000); // 1
setInterval(onSecond, 1000); // 2
// Code saved with E.setBootCode
Modules.addCached("Font8x16",function(){var a=atob("AAAAAAAAAAAAABwAP7A/sBwAAABwAHgAAAAAAHgAcAAAAARAH/Af8ARAH/Af8ARAAAAcYD4wIhDiHOIcM/AZ4AAADDAMYADAAYADAAYwDDAAAAHgG/A+ECcQPeAb8AIQAAAIAHgAcAAAAA/AH+AwMCAQAAAgEDAwH+APwAAAAQAFQAfAA4ADgAfABUABAAEAAQAHwAfAAQABAAAAAAgAeABwAAABAAEAAQABAAEAAQABAAAAADAAMAAAADAAYADAAYADAAYADAAAAA/AH+AwMCAQMDAf4A/AAAAIEBgQP/A/8AAQABAAABBwMPAhkCMQJhA8MBgwAAAQIDAwIhAiECIQP/Ad4AAAAwAHAA0AGRA/8D/wARAAAD4gPjAiECIQIhAj8CHgAAAP4B/wMhAiECIQA/AB4AAAMAAwACDwIfAjAD4APAAAAB3gP/AiECIQIhA/8B3gAAAcAD4QIhAiECIwP+AfwAAADGAMYAAAABAMcAxgAAABAAOABsAMYBgwEBAAAASABIAEgASABIAEgAAAEBAYMAxgBsADgAEAAAAYADgAIAAjsCewPAAYAAAAD+Af8BAQE9AT0B/QD4AAAAfwD/AZADEAGQAP8AfwAAAgED/wP/AiECIQP/Ad4AAAD8Af4DAwIBAgEDAwGGAAACAQP/A/8CAQMDAf4A/AAAAgED/wP/AiECcQMDA4cAAAIBA/8D/wIhAnADAAOAAAAA/AH+AwMCEQIRAx4BnwAAA/8D/wAgACAAIAP/A/8AAAIBA/8D/wIBAAAADgAPAAECAQP/A/4CAAAAAgED/wP/ADAAeAPPA4cAAAIBA/8D/wIBAAEAAwAHAAAD/wP/AcAA4AHAA/8D/wAAA/8D/wHAAOAAcAP/A/8AAAH+A/8CAQIBAgED/wH+AAACAQP/A/8CIQIgA+ABwAAAAf4D/wIBAgcCA8P/wf5AAAIBA/8D/wIgAjAD/wHPAAABhgPHAmECIQIxA58BjgAAA4ADAQP/A/8DAQOAAAAD/gP/AAEAAQABA/8D/gAAA/gD/AAGAAMABgP8A/gAAAP+A/8ABwA8AAcD/wP+AAADAwPPAPwAeAD8A88DAwAAA8AD4QA/AD8D4QPAAAADhwMPAhkCMQJhA8MDhwAAA/8D/wIBAgEAAAHAAOAAcAA4ABwADgAHAAACAQIBA/8D/wAAAQADAAYADAAGAAMAAQAAAAAAQABAAEAAQABAAEAAQABEAAYAAwABAAAAAA4AXwBRAFEAfgA/AAEAAAIAA/8D/wBBAGEAPwAeAAAAPgB/AEEAQQBBAGMAIgAAAB4APwBhAkED/gP/AAEAAAA+AH8AUQBRAFEAcwAyAAAAIQH/A/8CIQMAAYAAAAA+QH9gQSBBID/gf8BAAAACAQP/A/8AIABAAH8APwAAAEEDfwN/AAEAAAAAwADgACBAI3/jf8AAAgED/wP/ABgAPABnAEMAAAIBA/8D/wABAAAAfwB/AGAAPgBgAH8APwAAAEAAfwA/AEAAQAB/AD8AAAA+AH8AQQBBAEEAfwA+AAAAQCB/4D/gQSBBAH8APgAAAD4AfwBBAEEgP+B/4EAgAABBAH8APwBhAEAAcAAwAAAAIgBzAFkASQBNAGcAIgAAAEAAQAH+A/8AQQBDAAIAAAB+AH8AAQABAH4AfwABAAAAfAB+AAMAAQADAH4AfAAAAH4AfwADAB4AAwB/AH4AAABBAGMAPgAcAD4AYwBBAAAAfiB/IAEgASABYH/Af4AAAGMAZwBNAFkAcQBjAEMAAAAgACAB/gPfAgECAQAAA/8D/wAAAgECAQPfAf4AIAAgAAAA=="),
b=atob("BQUHCAgICAQFBQgHBAgDCAgHCAgICAgICAgDBAcHBwgICAgICAgICAgFCAgICAgICAgICAcICAgIBwgFCAUICAUICAgICAcICAUHCAUICAgICAgICAgICAgICAcDBw==");exports.add=function(c){c.prototype.setFont8x16=function(){this.setFontCustom(a,32,b,16)}}});
Modules.addCached("Font6x8",function(){var a=atob("AAAAAPoAwADAAFhw2HDQAGSS/5JMAGCW+LzSDAxSolIMEsAAPEKBAIFCPABIMOAwSAAQEHwQEAABBgAQEBAQAAIAAwwwwAB8ipKifABA/gBChoqSYgCEkrLSjAAYKEj+CADkoqKinAA8UpKSDACAgI6wwABskpKSbABgkpKUeAAiAAEmABAoRAAoKCgoKABEKBAAQIqQYAA8WqW9RDgOOMg4DgD+kpKSbAB8goKCRAD+goJEOAD+kpKCAP6QkIAAfIKCklwA/hAQEP4A/gAMAgIC/AD+EChEggD+AgICAP5AIED+AP7AMAz+AHyCgoJ8AP6QkJBgAHyChoN8AP6QmJRiAGSSkpJMAICA/oCAAPwCAgL8AOAYBhjgAPAOMA7wAMYoECjGAMAgHiDAAI6SosIA/4EAwDAMAwCB/wBAgEAAAQEBAQEBEn6SggQABCoqHgD+IiIcABwiIhQAHCIi/gAcKioYACB+oIAAGCUlPgD+ICAeAL4AAQG+AP4IFCIA/AIAPiAeIB4APiAgHgAcIiIcAD8kJBgAGCQkPwA+ECAgABIqKiQAIPwiADwCAjwAIBgGGCAAOAYIBjgAIhQIFCIAIRkGGCAAJioyIgAQboEA5wCBbhAAQIDAQIAAPFqlpUI8"),
b=atob("BAIEBgYGBgIEBAYGAwUCBQYDBgYGBgYGBgYCAwQGBAUGBgYGBgUFBgYCBgYFBgYGBgYGBgYGBgYGBgUDBQMEBgYFBQUFBQUFBQIEBQMGBQUFBQUFBAUGBgYGBQQCBAYG");exports.add=function(c){c.prototype.setFont6x8=function(){this.setFontCustom(a,32,b,8)}}});
// Enable 'Set Current Time' in Settings -> Communications before sending
require("Font8x16").add(Graphics);
require("Font6x8").add(Graphics);
const days = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months= ["January","February","March","April","May","June","July", "August","September","October","November","December"];

const name = 'Nik Martin';

console.log('h:',g.getHeight());
console.log('w', g.getWidth());

LED1.reset();
function onSecond() {
  // Called every second
  var t = new Date(); // get the current date and time
  g.clear();

  // Draw the time
  
  g.setFont6x8();
  let time = `${days[t.getDay()]},${months[t.getMonth()]}` ;
  g.drawString(time,95 - g.stringWidth(time),0);
 
  g.flip();
}

const createBackground = ()=> {
  
  g.clear();
  g.setFont8x16();
  g.drawString("Hello",95 - g.stringWidth('Hello'),5);
  g.drawString(name,95 - g.stringWidth(name),22);
  g.drawString("-- Espruino --",0,48);
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


*/
