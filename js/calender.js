let d = new Date();
document.getElementById("years").innerHTML = d.getDate();

const wDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dayData = new Date();
let yearsData = wDay[dayData.getDay()];
document.getElementById("weekDay").innerHTML = yearsData;

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const m = new Date();
let monthData = month[m.getMonth()];
document.getElementById("month").innerHTML = monthData;

let year = new Date();
let yearDate = year.getFullYear();
let yearString = yearDate.toString(); // converte em String
let yearRecort = yearString.slice(2, 4); // Corta o date
document.getElementById("date").innerHTML = yearRecort;

// hourse
setInterval(hourses, 1000);

function hourses() {
  const h = new Date();
  document.getElementById("hourse").innerHTML = h.getHours() + ":";
}

// minutes
setInterval(minutes, 1000);

function minutes() {
  const m = new Date();
  document.getElementById("minute").innerHTML = m.getMinutes() + ":";
}
// secondss
setInterval(secondss, 1000);

function secondss() {
  const s = new Date();
  document.getElementById("seconds").innerHTML = s.getSeconds();
}
