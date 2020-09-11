'use strict'

var stores = null;
var myTable = document.getElementById('myTable');
var storeInfo = document.getElementById('storeInfo');
var times = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

function Store(name, min, max, avg) {
    
    this.storeName = name;
    this.minCustomers = min;
    this.maxCustomers = max;
    this.avgCookies = avg;
    this.cookieSalePerHr = [];
    this.totalCookiesADay = 0;
}

function customersPerHrRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Store.prototype.render = function () {
    var trEL = document.createElement('tr');
    myTable.append(trEL);

    var blankTd = document.createElement('td');
    blankTd.textContent = this.storeName;
    trEL.appendChild(blankTd);

    for (var i = 0; i < times.length; i++) {
        var cookiesAtHour = Math.round(customersPerHrRandom(this.minCustomers, this.maxCustomers) * this.avgCookies);
        this.cookieSalePerHr.push(cookiesAtHour);
        this.totalCookiesADay += cookiesAtHour;
        var liEl = document.createElement('td');
        liEl.textContent = Math.round(customersPerHrRandom(this.minCustomers, this.maxCustomers) * this.avgCookies);
        trEL.appendChild(liEl);
    }
    var liEl = document.createElement('td')
    liEl.textContent = this.totalCookiesADay;
    trEL.appendChild(liEl);
}
var seattle = new Store('Seattle', 23, 65, 6.3)
var tokyo = new Store('Tokyo', 3, 24, 1.2)
var dubai = new Store('Dubai', 11, 38, 3.7)
var paris = new Store('Paris', 20, 38, 2.3)
var lima = new Store('Lima', 2, 16, 4.6)

function createTableHeader() {
    var trElement = document.createElement('tr');
    myTable.appendChild(trElement);

    var thElement = document.createElement('th');
    thElement.textContent = "Store Location";
    trElement.appendChild(thElement);

    for (var i = 0; i < times.length; i++) {
        var thElement = document.createElement('th');
        thElement.textContent = times[i];
        trElement.appendChild(thElement);
    }
    thElement = document.createElement('th');
    thElement.textContent = 'Daily Total:';
    trElement.appendChild(thElement);
}
createTableHeader();

function createTableFooter() {
    var trElement = document.createElement('tr');
    var thElement = document.createElement('th')
    thElement.textContent = 'Hourly Totals';
    trElement.appendChild(thElement);
      
    var grandTotal = 0;
    loop1: for (var i = 0; i < times.length; i++) {

        var hourlySum = 0;   
        loop2: for (var j = 0; j < stores.length; j++) {
            
            hourlySum += stores[j].cookieSalePerHr[i];
            console.log(hourlySum);
            grandTotal += stores[j].cookieSalePerHr[i];
        }
        var thElement = document.createElement('th');
        thElement.textContent = hourlySum
        trElement.appendChild(thElement);
        
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = grandTotal;
    trElement.appendChild(tdElement);
    myTable.appendChild(trElement);
}

seattle.render()
tokyo.render()
dubai.render()
paris.render()
lima.render()
stores = [seattle, tokyo, dubai, paris, lima]
createTableFooter();