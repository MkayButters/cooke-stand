'use strict'

var storeinfo = document.getElementById('storeinfo')
function customersPerHrRandom(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function Store(name, min, max, avg) {

    this.storeName = name;
    this.minCustomers = min;
    this.maxCustomers = max;
    this.avgCookies = avg;
    this.times = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
    this.cookieSalePerHr = [];
    this.totalCookiesADay = 0;
}

Store.prototype.render = function () {
    for (var i = 0; i < this.times.length; i++) {
        var cookiesAtHour = Math.round(customersPerHrRandom(this.minCustomers, this.maxCustomers) * this.avgCookies);
        this.totalCookiesADay += cookiesAtHour;
        var liEl = document.createElement('li');
        liEl.textContent = this.storeName + "- " + this.times[i] + Math.round(customersPerHrRandom(this.minCustomers, this.maxCustomers) * this.avgCookies);
        storeinfo.appendChild(liEl);
    }
    var liEl = document.createElement('li')
    liEl.textContent = "Daily Total: " + this.totalCookiesADay;
    storeinfo.appendChild(liEl)
}
var seattle = new Store('Seattle' , 23 , 65 , 6.3)
var tokyo = new Store('Tokyo' , 3 , 24 , 1.2)
var dubai = new Store('Dubai' , 11 , 38 , 3.7)
var paris = new Store('Paris' , 20 , 38 , 2.3)
var lima = new Store('Lima' , 2 , 16 , 4.6)

seattle.render()
tokyo.render()
dubai.render()
paris.render()
lima.render()

console.log(customersPerHrRandom)
