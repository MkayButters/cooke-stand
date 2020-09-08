'use strict'

var storeinfo = document.getElementById('storeinfo')

function customersPerHrRandom(min,max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var seattle = {

    store: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgcookies: 6.3,
    times: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],

    render: function () {
        for (var i = 0; i <= this.times.length; i++) {
            var liEl = document.createElement('li')
            liEl.textContent = this.store + "- " + this.times[i] + Math.round(customersPerHrRandom(this.minCustomers , this.maxCustomers)*this.avgcookies);
            storeinfo.appendChild(liEl)
            
        }
    }
}
seattle.render()
console.log(customersPerHrRandom)

var tokyo = {

    store: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgcookies: 1.2,
    times: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],

    render: function () {
        for (var i = 0; i <= this.times.length; i++) {
            var liEl = document.createElement('li')
            liEl.textContent = this.store + "- " + this.times[i] + Math.round(customersPerHrRandom(this.minCustomers , this.maxCustomers)*this.avgcookies);
            storeinfo.appendChild(liEl)
            
        }
    }
}
tokyo.render()
console.log(customersPerHrRandom)

var dubai = {

    store: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgcookies: 3.7,
    times: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],

    render: function () {
        for (var i = 0; i <= this.times.length; i++) {
            var liEl = document.createElement('li')
            liEl.textContent = this.store + "- " + this.times[i] + Math.round(customersPerHrRandom(this.minCustomers , this.maxCustomers)*this.avgcookies);
            storeinfo.appendChild(liEl)
            
        }
    }
}
dubai.render()
console.log(customersPerHrRandom)

var paris = {

    store: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgcookies: 2.3,
    times: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],

    render: function () {
        for (var i = 0; i <= this.times.length; i++) {
            var liEl = document.createElement('li')
            liEl.textContent = this.store + "- "  + this.times[i] + Math.round(customersPerHrRandom(this.minCustomers , this.maxCustomers)*this.avgcookies);
            storeinfo.appendChild(liEl)
            
        }
    }
}
paris.render()
console.log(customersPerHrRandom)

var lima = {

    store: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgcookies: 4.6,
    times: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],

    render: function () {
        for (var i = 0; i <= this.times.length; i++) {
            var liEl = document.createElement('li')
            liEl.textContent = this.store + "- " + this.times[i] + Math.round(customersPerHrRandom(this.minCustomers , this.maxCustomers)*this.avgcookies);
            storeinfo.appendChild(liEl)
            
        }
    }
}
lima.render()
console.log(customersPerHrRandom)

