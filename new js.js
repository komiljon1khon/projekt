let user = new Object();


let name = prompt("What is your Name ?")

if (name.length >= 5) {
    user.name = name;
    let lastname = prompt('Enter Your surname ')
    if (lastname.length >= 5) {
        user.lastname = lastname;
        let car = +prompt('nechta mashinang bor?')
        if (car > 1) { 
            user.car = car
            let age = +prompt('nechi yoshsan')
        } else if (age > 12) {
            user.age = age
            console.log(`yoshing 12dan katta bolsin`);
        } else {
            console.log(`mashinang 1tadan kop bolishi shatr`);
        }
    } else {
        console.log('familyan 5ta xarifdan kop bolishi kerak');
    }
} else {
    console.log('isming kamida 5ta xarfdan iborat bolishi shart');
}
console.log(user);