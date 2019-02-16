'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var pikeUl = document.getElementById('pike');
var airportUl = document.getElementById('airport');
var seaCentUl = document.getElementById('seaCent');
var capitolUl = document.getElementById('capitol');
var alkiUl = document.getElementById('alki');
var bigAssArray = [];

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
            liEl.textContent = hours[i] + ': ' + this.random().toFixed(0) + ' cookies sold';
            pikeUl.appendChild(liEl);
            bigAssArray.push(firstPike);
            console.log(bigAssArray)
        }
    },
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
            liEl.textContent = hours[i] + ': ' + this.random().toFixed(0) + ' cookies sold';
            airportUl.appendChild(liEl);
            bigAssArray.push(seaTac);
            console.log(bigAssArray)
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
            liEl.textContent = hours[i] + ': ' + this.random().toFixed(0) + ' cookies sold';
            seaCentUl.appendChild(liEl);
            bigAssArray.push(seaCent);
            console.log(bigAssArray)
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
            liEl.textContent = hours[i] + ': ' + this.random().toFixed(0) + ' cookies sold';
            capitolUl.appendChild(liEl);
            bigAssArray.push(capHill);
            console.log(bigAssArray)
        }
    }
}
capHill.render();

var alki = {
    minHrlyCust: 2,
    maxHrlyCust: 16,
    avgCookie: 4.6,
    random: function getRandomNumber(){
        // console.log('random');
        return Math.random() * ((this.minHrlyCust, this.maxHrlyCust) * this.avgCookie);
    },
    render: function(){
        for(var i = 0; i < hours.length; i++){
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.random().toFixed(0) + ' cookies sold';
            alkiUl.appendChild(liEl);
            bigAssArray.push(alki);
            console.log(bigAssArray)
        }
    }
}
alki.render();
