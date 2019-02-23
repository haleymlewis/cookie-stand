'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = document.getElementById('pike');
var airport = document.getElementById('airport');
var seaCent = document.getElementById('seaCent');
var capitol = document.getElementById('capitol');
var alki = document.getElementById('alki');
var cookiesSoldPerHour = [];
var shopList = [];
var allShops = [pike, airport, seaCent, capitol, alki];
var totalOfTotals = 0;

var table = document.getElementById('table');

////////// Header Row Creation
function header() {
  console.log('thead fired');
  var trEl = document.createElement('tr');
///////// Creating Header Locations Column
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);
////////// Adding Shop Hours to Header
  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
////////// Adding Location Totals Column to Header
  var thEl2 = document.createElement('th');
  thEl2.textContent = 'Location Totals';
  trEl.appendChild(thEl2);
  table.appendChild(trEl);
}

////////// Constructor Function for Table
function Stores(name, minHrlyCust, maxHrlyCust, list, avgCookie) {
  this.name = name;
  this.minHrlyCust = minHrlyCust;
  this.maxHrlyCust = maxHrlyCust;
  this.avgCookie = avgCookie;
  this.randomCookies = [];
  this.totalDailyCookies = 0;
  this.random = function () {
////////// Random Cookie Generation 
    for (var j = 0; j < hours.length; j++) {
      var custPerHr = Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust) + this.minHrlyCust);
      var cookiesPerHr = Math.floor(custPerHr * this.avgCookie);
      debugger;
      this.randomCookies.push(cookiesPerHr);
    }
    console.log(this.randomCookies);

////////// Render Function Inside Constructor
  };
  this.render = function () {
    var table = document.getElementById('table');
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl); 
    
////////// Random Cookies added to Table
    for (var i = 0; i < this.randomCookies.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.randomCookies[i];
      console.log("tdel " + tdEl);
      trEl.appendChild(tdEl);
    }
////////// Math to Calculate Shop Totals
    for (var i = 0; i < this.randomCookies.length; i++) {
      this.totalDailyCookies = this.totalDailyCookies + this.randomCookies[i];
    }
    var thEl = document.createElement('th');
    thEl.textContent = this.totalDailyCookies;
    trEl.appendChild(thEl);

    console.log("trel  " + trEl);
    table.appendChild(trEl);
  }
  shopList.push(this);
}

function footer() {
  console.log('footer fired');
  for (var j = 0; j < hours.length; j++){
   for (var i = 0; i < shopList[i], cookiesSoldPerHour.length; i++){
      cookiesSoldPerHour[i] += shopList[j].randomCookies[i]
      totalOfTotals += cookiesSoldPerHour;
    };
  };
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total Cookies';
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = cookiesSoldPerHour[i];
    trEl.appendChild(tdEl);
  }
  table.appendChild(trEl);
}
////////// Calling all the shit I built up top

header();

var firstPike = new Stores('First and Pike', 23, 65, pike, 6.5);
firstPike.random();
firstPike.render();

var seaTac = new Stores('SeaTac Airport', 3, 24, airport, 1.2);
seaTac.random();
seaTac.render();

var seaCent = new Stores('Seattle Center', 11, 38, seaCent, 3.7);
seaCent.random();
seaCent.render();

var capHill = new Stores('Capitol Hill', 20, 38, capitol, 2.3);
capHill.random();
capHill.render();

var alki = new Stores('Alki Beach', 2, 16, alki, 4.6);
alki.random();
alki.render();

<<<<<<< HEAD
footer();

///////// Jeff Code Review 2-23
// function makeFooterRow(){
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Hourly Totals for All Locations';
//   trEl.appendChild(thEl);

//   var totalOfTotals = 0;
//   var hourlyTotal = 0;

//   debugger;
//   for (var i = 0; i < hours.length; i++){
//     hourlyTotal = 0;
//     for (var j = 0; j < allShops.length; j++) {
//       hourlyTotal += allShops[j].cookiesPerHr[i];
//       totalOfTotals += allShops[j].cookiesPerHr[i];
      
//     }
//     thEl = document. createElement('th');
//     thEl.textContent = hourlyTotal;
//     trEl.appendChild(thEl);
//   }

//   thEl = document.createElement('th');
//   thEl.textContent = totalOfTotals;
//   trEl. appendChild(thEl);
//   table.appendChild(trEl);

// }
=======
footer();
>>>>>>> ee8eb7e7d39deda66f766b6a90fc8398b7d15c93
