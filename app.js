'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = document.getElementById('pike');
var airport = document.getElementById('airport');
var seaCent = document.getElementById('seaCent');
var capitol = document.getElementById('capitol');
var alki = document.getElementById('alki');

var table = document.getElementById('table');

var thead = document.createElement('th');

thead = function () {
    for (var i = 0; i = hours.length; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = hours[i];
    }
}

function Stores(name, minHrlyCust, maxHrlyCust, list, avgCookie) {
    this.name = name;
    this.minHrlyCust = minHrlyCust;
    this.maxHrlyCust = maxHrlyCust;
    this.avgCookie = avgCookie;
    this.list = list;
    this.bigAssArray = [];
    this.random = function(){
        for (var j=0; j < hours.length; j++){
            var cookiesPerHr = Math.floor(Math.random() * ((this.minHrlyCust, this.maxHrlyCust) * this.avgCookie)+1);
            this.bigAssArray.push(cookiesPerHr);
            // return cookiesPerHr;
        }
        console.log(this.bigAssArray);
        
    };
    this.render = function(){
        var table = document.getElementById('table');
        var trEl = document.createElement('tr');
        var thEl = document.createElement('th');
        thEl.textContent = this.name;
        trEl.appendChild(thEl);
        // var tdEl = document.createElement('td');
        for (var i = 0; i < this.bigAssArray.length; i++) {
            var tdEl = document.createElement('td');
            tdEl.textContent = this.bigAssArray[i];
            console.log("tdel " + tdEl);
            trEl.appendChild(tdEl);
        }
        console.log("trel  " + trEl);
        table.appendChild(trEl);
        
    }
}
var tfootEl = document.createElement('tfoot');


// tfootEl = [this.bigAssArray]; function math() {
//     var math = 0;
//     for (var i=0; i < tfootEl.length; i++) {
//         math = math + tfootEl[i];
//     }
//     return math;
// }
// console.log(math());

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






        // ***Brayn's Example:
        // for (var i=0; i < data.length; i++) {
        //     bigAssArray.push(
        //       '<td>' + shop[i].minHrlyCust + '</td>' +
        //       '<td>' + shop[i].maxHrlyCust + '</td>' +
        //       '<td>' + shop[i].avgCookie + '</td>'
        //     )
        //   }
        //   console.log('my data array:', data);
          
        //   for (var j = 0; j < data.length; j++) {
        //     var newRow = document.createElement('tr');
        //     newRow.innerHTML = data[j];
        //     table.appendChild(newRow);
        //   }
        
        // for(var i = 0; i < hours.length; i++){
        //     var liEl = document.createElement('li');
        //     liEl.textContent = hours[i] + ': ' + this.random().toFixed(0) + ' cookies sold';
    //     //     this.list.appendChild(liEl);
    //     };
    // }



/////Haley's old code, from lab 6//////
// var firstPike = {
//     minHrlyCust: 23,
//     maxHrlyCust: 65,
//     avgCookie: 6.5,
//     // random: function getRandomNumber(){
//         // console.log('random');
       
//     },
//     render: 
//     },
// }
// firstPike.render();

// var seaTac = {
//     minHrlyCust: 3,
//     maxHrlyCust: 24,
//     avgCookie: 1.2,
//     random: function getRandomNumber(){
//         // console.log('random');
//         return Math.random() * ((this.minHrlyCust, this.maxHrlyCust) * this.avgCookie);
//     },
//     render: function(){
//         for(var i = 0; i < hours.length; i++){
//             var liEl = document.createElement('li');
//             liEl.textContent = hours[i] + ': ' + this.random().toFixed(0) + ' cookies sold';
//             airportUl.appendChild(liEl);
//             bigAssArray.push(seaTac);
//             console.log(bigAssArray)
//         }
//     }
// }
// seaTac.render();

// var seaCent = {
//     minHrlyCust: 11,
//     maxHrlyCust: 38,
//     avgCookie: 3.7,
//     random: function getRandomNumber(){
//         // console.log('random');
//         return Math.random() * ((this.minHrlyCust, this.maxHrlyCust) * this.avgCookie);
//     },
//     render: function(){
//         for(var i = 0; i < hours.length; i++){
//             var liEl = document.createElement('li');
//             liEl.textContent = hours[i] + ': ' + this.random().toFixed(0) + ' cookies sold';
//             seaCentUl.appendChild(liEl);
//             bigAssArray.push(seaCent);
//             console.log(bigAssArray)
//         }
//     }
// }
// seaCent.render();

// var capHill = {
//     minHrlyCust: 20,
//     maxHrlyCust: 38,
//     avgCookie: 2.3,
//     random: function getRandomNumber(){
//         // console.log('random');
//         return Math.random() * ((this.minHrlyCust, this.maxHrlyCust) * this.avgCookie);
//     },
//     render: function(){
//         for(var i = 0; i < hours.length; i++){
//             var liEl = document.createElement('li');
//             liEl.textContent = hours[i] + ': ' + this.random().toFixed(0) + ' cookies sold';
//             capitolUl.appendChild(liEl);
//             bigAssArray.push(capHill);
//             console.log(bigAssArray)
//         }
//     }
// }
// capHill.render();

// var alki = {
//     minHrlyCust: 2,
//     maxHrlyCust: 16,
//     avgCookie: 4.6,
//     random: function getRandomNumber(){
//         // console.log('random');
//         return Math.random() * ((this.minHrlyCust, this.maxHrlyCust) * this.avgCookie);
//     },
//     render: function(){
//         for(var i = 0; i < hours.length; i++){
//             var liEl = document.createElement('li');
//             liEl.textContent = hours[i] + ': ' + this.random().toFixed(0) + ' cookies sold';
//             alkiUl.appendChild(liEl);
//             bigAssArray.push(alki);
//             console.log(bigAssArray)
//         }
//     }
// }
// alki.render();