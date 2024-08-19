// Write your solution in this file!
var customerName = "bob"

function upperCaseCustomerName(){
     customerName = customerName.toUpperCase()
}

function setBestCustomer(){
 return globalThis.bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer
}


const leastFavoriteCustomer = "M Shaibani";

function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = "Mohand"
}