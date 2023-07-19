//getelementByCLassNaMe todo-list-elem-title

var spanItems, ulItems, liItems;

spanItems = document.getElementsByClassName('todo-list-elem-title');
console.log('Get elemnts by Class Name ' + spanItems);
console.log(spanItems[0]);
console.log(spanItems[1]);
console.log(spanItems[2].textContent= 'This is a content from elemtn2 ');
console.log(spanItems[3].style.background = 'red');


//getlementByclassName by specfific scope

ulItems = document.querySelector('ul').getElementsByClassName('todo-list-elem-title');
console.log(ulItems);
console.log(ulItems[0]);
console.log(ulItems[1]);
console.log(ulItems[2]);

//convert html collection to array


var spanArray = Array.from(spanItems);

console.log(spanArray);
console.log(spanArray[1]);

for( var i =0; i<spanArray.length; i++){
spanArray[i].style.background = 'blue';

//spanArray[0]
//spanArray[1]
}

//get li wit tags

// liItems = document.getElementsByTagName('li');

// console.log(liItems);
// console.log(liItems[2]);
// console.log(liItems[1].textContent = 'Updated by tag Nasme');



//get li with all selectorAll
liItems = document.querySelectorAll('li');

console.log(liItems);
for(var i= 0 ; i <ulItems.length; i++){
    ulItems[i].style.background = 'yellow';
    ulItems[i].style.margin = '10px';
    ulItems[i].style.color = 'red';

}
//console.log(liItems[2]);
//console.log(liItems[1].textContent = 'Updated by tag Nasme');


