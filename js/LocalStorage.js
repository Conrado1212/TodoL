/*
method          Desc
1.setItem()     Add key and value  to local storage
2.getItem()     Retrieve a value by the key
3.removeItem() Remove an item by key
4.clear         clear all data
*/

//setItem()

//localStorage.setItem('my-key', 'my-value');

//getItem()

// var item = localStorage.getItem('my-key');
// //alert(item);
// //console.log(item);


// //removeITem

// localStorage.removeItem('my-key');

// //clear

// localStorage.clear();

//Session storage

//sessionStorage.setItem('my-key', 'my-value');


const pi =3.1415;

//pi = pi+10;
var x = 10;

{
    const x =5;
    console.log(x);
}
console.log(x);


const car = {type:
'ford', model:"500t", color:'red'
};

console.log(car);

car.color = 'blue';

console.log(car);

// car = {type:
//     'fiat', model:"500t", color:'red'
//     };
// console.log(car);


const cars = ['vovlo', 'ford','lincoln'];

cars[0]= 'toyota';
cars.push('audi');
console.log(cars);


const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('.res-btn');
const input = document.querySelector('add-input');

console.log(form,ul,button,input);

//create an html element

const heading = document.createElement('h2');
//add class to heading
heading.className = 'heading-one';
//add id to element
heading.id = 'heading';
//add elments inside lement
//heading.innerHTML = '<span>Here is a span inside headin one </span>'

heading.textContent = 'This is the new heading from here'

const card  = document.querySelector('.form-body');
//this will pace the heading intpothe form body 
card.appendChild(heading);

console.log(heading);