var ulListElem = document.querySelector('ul.todo-list');
var liListElem = document.querySelectorAll('li.todo-list');
//nodeList
var uListElemNode = ulListElem.childNodes;

//html collection list

var uListElemChildren = ulListElem.children;

console.log(ulListElem);
console.log(liListElem);
console.log(uListElemNode);
console.log(uListElemChildren);


var fChild = ulListElem.firstElementChild;
var lChild = ulListElem.lastElementChild;

console.log('First and last: ' +fChild, lChild );


console.log("for loop child: ");

for( var i =0;i<uListElemNode.length;i++){
    console.log(uListElemNode[i].nodeName + " " + uListElemNode[i].nodeType);
}

//Parent Nodes
console.log('parent noide of ul list: ');
console.log(ulListElem.parentNode);
console.log(ulListElem.parentElement);
console.log(ulListElem.parentElement.parentNode);


console.log('Printing the Prev and next sibling');

var findSibling = document.querySelector('li.todo-list-elem');
console.log(findSibling.nextElementSibling);
console.log(findSibling.nextElementSibling.nextElementSibling);
var findSIbilingOfTwo = findSibling.nextElementSibling.nextElementSibling;
console.log(findSIbilingOfTwo.previousElementSibling);

console.log('Find child of li that are span and a href link');

var liCOllection = document.querySelector('li.todo-list-elem');
console.log(liCOllection);
console.log(liCOllection.children);
var span = liCOllection.children[0];
var link = liCOllection.children[1];

console.log('The span and link: ' + span, link);


console.log(link.id='trash_id');