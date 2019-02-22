'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = document.getElementById('pike');
var airport = document.getElementById('airport');
var seaCent = document.getElementById('seaCent');
var capitol = document.getElementById('capitol');
var alki = document.getElementById('alki');

var allShops = [pike, airport, seaCent, capitol, alki];

var table = document.getElementById('table');

var thead = document.createElement('th');

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
  thEl = document.createElement('th');
  thEl.textContent = 'Location Totals';
  trEl.appendChild(thEl);
  table.appendChild(thEl);
}

////////// Constructor Function for Table
function Stores(name, minHrlyCust, maxHrlyCust, list, avgCookie) {
  this.name = name;
  this.minHrlyCust = minHrlyCust;
  this.maxHrlyCust = maxHrlyCust;
  this.avgCookie = avgCookie;
  this.randomCookies = [];
  this.cookiesPerHr = []; //new line
  this.totalDailyCookies = 0;
  this.random = function () {
    for (var j = 0; j < hours.length; j++) {
      var cookiesPerHr = Math.floor(Math.random() * ((this.minHrlyCust, this.maxHrlyCust) * this.avgCookie) + 1);
      this.randomCookies.push(cookiesPerHr);
      // return cookiesPerHr;
    }
    console.log(this.randomCookies);

  ////////// Render Function Inside Constructor
  };
  this.render = function () {
    var table = document.getElementById('table');
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl); // appending td to tr
    
  ////////// Random Cookie Generation
    for (var i = 0; i < this.randomCookies.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.randomCookies[i];
      console.log("tdel " + tdEl);
      trEl.appendChild(tdEl);
    }

    var thEl = document.createElement('th');
    thEl.textContent = this.randomCookies;
    trEl.appendChild(thEl);

    console.log("trel  " + trEl);
    table.appendChild(trEl);
  }
}

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


(function renderTable() {
  header();
  for(var i = 0; i < allShops; i++) {
    allShops[i].render();
  }
})();