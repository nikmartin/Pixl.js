// Enable 'Set Current Time' in Settings -> Communications before sending
// Niks Pixl.js Badge
require("Font8x16").add(Graphics);
require("Font6x8").add(Graphics);
require("FontSinclair").add(Graphics);

const welcome1 = "HELLO";
const welcome2 = "MY NAME IS";
const name = "Nik Martin";
const company = "Patrick Engineering Inc.";

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'];

let g;
let menu = false;

const h = g.getHeight();
const w = g.getWidth();

NRF.nfcURL("https://nikmartin.js.org");
const pad = (val) => {
  return (val < 10 ? '0' : '') + val;
};
const drawBadge = () => {
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
  //clear last screen update
  if (menu) {
    return;
  }
  g.setColor(0, 0, 0);
  g.fillRect(0, 55, 128, 64);
  g.setColor(1, 1, 1);
  let d = new Date();
  g.setFontBitmap();
  const t = `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  g.drawString(t, 0, 58);
  const temp = `${(9 * E.getTemperature() / 5 + 32).toFixed(1)}f`;
  g.drawString(temp, g.getWidth() - g.stringWidth(temp), 58);
  g.flip();
};

setInterval(() => {
  // console.log('on timer');
  onTimer();
}, 5000); // 5



var backlight = false;
const toggleBacklight = () => {
  backlight = !backlight;
  if (backlight) {
    LED1.set();
    if (menu) {
      return;
    }
    let int = setInterval(() => {
      backlight = !backlight;
      LED1.reset();
      clearInterval(int);
    }, 5000);
  } else {
    LED1.reset();
  }
};

const doDisco = () => {
  if (isDisco) {

    let ary = []
    while (ary.length < 60) {
      ary.push(100); //on
      ary.push(400); //off
    }
    ary.push(0)
    digitalPulse(LED1, 1, ary);
    isDisco = false;
    LED1.reset();
  }

};

global.GB = (data) => {
  toggleBacklight();
  g.setColor(0, 0, 0);
  g.fillRect(0, 0, 128, 6);
  g.setColor(1, 1, 1);
  g.drawString(JSON.stringify(data), 0, 0);
  Terminal.inject(data);
};

// Two variables to update
//let boolean = false;
//let number = 50;
let isDisco = false;
// First menu
var mainmenu = {
  "": {
    "title": "-- Pip Boy --"
  },
  "Backlight": () => {
    toggleBacklight();
  },

  "Submenu": () => { Pixl.menu(submenu); },
  /*
  "A Boolean": {
    value: boolean,
    format: v => v ? "On" : "Off",
    onchange: v => { boolean = v; }
  },
  "A Number": {
    value: number,
    min: 0, max: 100, step: 10,
    onchange: v => { number = v; }
  },*/
  "Disco": () => {
    isDisco = true;
    menu = false;
    Pixl.menu();
    drawBadge();
    setTimeout(()=>{
      doDisco();
    },1000);

  },
  "Exit": () => {
    menu = false;
    Pixl.menu();
    drawBadge();
  },
};
// Submenu
var submenu = {
  "": {
    "title": "-- SubMenu --"
  },
  "One": undefined, // do nothing
  "Two": undefined, // do nothing
  "< Back": () => { Pixl.menu(mainmenu); },
};
// Actually display the menu

drawBadge();
onTimer();
//menu
setWatch(() => {
  console.log("Pressed");
  menu = !menu;
  if (menu) {
    toggleBacklight();
    Pixl.menu(mainmenu);
  } else {
    Pixl.menu();
    drawBadge();
  }
}, BTN2, { edge: "rising", debounce: 50, repeat: true });
//disco
setWatch(() => {
  if (!menu){
    console.log("DISCO!");
    LED1.reset();
    isDisco=true;
    doDisco();
  }

}, BTN4, { edge: "rising", debounce: 50, repeat: true });