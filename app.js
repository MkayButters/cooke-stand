'use strict'

seattle = {

    store1: 'seattle',
    minCustomers1: 23,
    maxCustomers1: 65,
    avgcookies1: 6.3,
    times1: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],

    function(customersPerHrRandom1) {
        return Math.floor(Math.random() * (10 + 1));
    }

    function(display) {
        document.createElement((times1[0] + 1) + customersPerHrRandom1);
    }
    
}
console.log(customersPerHrRandom1);

