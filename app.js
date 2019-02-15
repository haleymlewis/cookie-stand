'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var pikeUl = document.getElementById('pike');

var firstPike = {
    minHrlyCust: 23,
    maxHrlyCust: 65,
    avgCookieHr: 6.5,
    render: function getRandomNumber(minHrlyCust, maxHrlyCust){
        return Math.random() * (minHrlyCust, maxHrlyCust) + minHrlyCust;
    },
    render: function(){
        for(var i = 0; i < hours.length; i++){
            var liEl = document.createElement('li');
        liEl.textContent = hours[i] + ': ' + this.avgCookieHr[i] + ' cookies.';
            pikeUl.appendChild(liEl);
        }
    }
}
firstPike.render();