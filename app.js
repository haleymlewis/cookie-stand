'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var pikeUl = document.getElementById('pike');
var airportUl = document.getElementById('airport');
var seaCentUl = document.getElementById('seaCent');
var capitolUl = document.getElementById('capitol');
// var alkiUl = documemt.getElementById('alki');

var firstPike = {
    minHrlyCust: 23,
    maxHrlyCust: 65,
    avgCookie: 6.5,
    random: function getRandomNumber(){
        // console.log('random');
        return Math.random() * ((this.minHrlyCust, this.maxHrlyCust) * this.avgCookie);
    },
    render: function(){
        for(var i = 0; i < hours.length; i++){
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.random().toFixed(0) + ' cookies.';
            pikeUl.appendChild(liEl);
        }
    }
}
firstPike.render();

var seaTac = {
    minHrlyCust: 3,
    maxHrlyCust: 24,
    avgCookie: 1.2,
    random: function getRandomNumber(){
        // console.log('random');
        return Math.random() * ((this.minHrlyCust, this.maxHrlyCust) * this.avgCookie);
    },
    render: function(){
        for(var i = 0; i < hours.length; i++){
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.random().toFixed(0) + ' cookies.';
            airportUl.appendChild(liEl);
        }
    }
}
seaTac.render();

var seaCent = {
    minHrlyCust: 11,
    maxHrlyCust: 38,
    avgCookie: 3.7,
    random: function getRandomNumber(){
        // console.log('random');
        return Math.random() * ((this.minHrlyCust, this.maxHrlyCust) * this.avgCookie);
    },
    render: function(){
        for(var i = 0; i < hours.length; i++){
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.random().toFixed(0) + ' cookies.';
            seaCentUl.appendChild(liEl);
        }
    }
}
seaCent.render();

var capHill = {
    minHrlyCust: 20,
    maxHrlyCust: 38,
    avgCookie: 2.3,
    random: function getRandomNumber(){
        // console.log('random');
        return Math.random() * ((this.minHrlyCust, this.maxHrlyCust) * this.avgCookie);
    },
    render: function(){
        for(var i = 0; i < hours.length; i++){
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.random().toFixed(0) + ' cookies.';
            capitolUl.appendChild(liEl);
        }
    }
}
capHill.render();