'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var pikeUl = document.getElementById('pike');
var airportUl = document.getElementById('airport');
var seaCentUl = document.getElementById('seaCent');
var capitolUl = document.getElementById('capitol');
var alkiUl = document.getElementById('alki');

function Stores(minHrlyCust, maxHrlyCust, list, avgCookie) {
    this.minHrlyCust = minHrlyCust;
    this.maxHrlyCust = maxHrlyCust;
    this.avgCookie = avgCookie;
    this.list = list;
    var bigAssArray = [];
    this.random = function(){
        return Math.random() * ((this.minHrlyCust, this.maxHrlyCust) * this.avgCookie);
    };
    this.render = function(){
        for(var i = 0; i < hours.length; i++){
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.random().toFixed(0) + ' cookies sold';
            this.list.appendChild(liEl);
        };
    }
    bigAssArray.push(this.avgCookie);

}

var firstPike = new Stores(23, 65, pikeUl, 6.5);
firstPike.render();

var seaTac = new Stores(3, 24, airportUl, 1.2)
seaTac.render();

var seaCent = new Stores(11, 38, seaCentUl, 3.7);
seaCent.render();

var capHill = new Stores(20, 38, capitolUl, 2.3);
capHill.render();

var alki = new Stores(2, 16, alkiUl, 4.6);
alki.render();


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