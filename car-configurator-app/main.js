
var vwCars = [
    {
        name: "Up",
        img: "img/up.webp",
        price: 8000
    },
    {
        name: "Golf",
        img: "img/golf.webp",
        price: 14000
    },
    {
        name: "Polo",
        img: "img/polo.webp",
        price: 10000
    },
    {
        name: "Tiguan",
        img: "img/tiguan.webp",
        price: 18000
    },
    {
        name: "Passat",
        img: "img/passat.webp",
        price: 16000
    },
]


var engines = {
    small: {
        size: "1.0",
        type: "TSI",
        gearBox: "5-speed manual",
        price: 1000
    },
    large: {
        size: "2.0",
        type: "TSI",
        gearBox: "7-speed manual",
        price: 2000
    },
    auto: {
        size: "2.0",
        type: "TSI",
        gearBox: "7-speed automatic",
        price: 3000
    }
}

var colours = [
    "Orange",
    "Silver",
    "Blue",
    "Black",
    "Red",
]

var optionalExtras = [
    {
        name: "Luxury Carpets",
        price: ""
    }
    ,
    "Leather Steering Wheel",
    "LED Headlights"
]


var chosenCar;
var chosenEngine;
var chosenColour;

function whatCar(){
    console.log("You chose a " + chosenColour + " " + chosenCar + " " + "with a " + chosenEngine + " engine.")
}

