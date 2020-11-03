var carName = "Volvo";
// arrays 
var cars = ["ayla","kijang","toshiba"];
// Objects
var person = {
    firstName : "John",
    age : 45,
    eyeColor : "bluesky",
    fullname : function () {
        return this.firstName + " " + this.age;
    }
};

document.getElementById('demo').innerHTML =  carName;
document.getElementById('demo2').innerHTML = cars;
document.getElementById('demo3').innerHTML =  person.firstName + " is Years age : " +  person.age;

// menggunakan function fullname
// document.getElementById('demo3').innerHTML =  person.fullname();

    // escape character 
    document.getElementById('escape').innerHTML = "We are the so-called \"Vikings\" from the north.";
    // ex : We are the so-called "Vikings" from the north.


// function myFunction{} => default

// arrow function
var myFunction = () => {
    document.getElementById('demo').style.display = "block";
    document.getElementById('demo').style.fontSize = "32px";
    document.getElementById('demo').style.fontFamily = 'Montserrat', sans-serif;   
}

myFunction();