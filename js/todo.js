const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('.res-btn');
const input = document.querySelector('#item');
//console.log(form,ul,button,input);


let itemsList = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsList));

const data = JSON.parse(localStorage.getItem('items'));


console.log(itemsList);
console.log(data);




const makeLi = text =>{
//create li Element
const li = document.createElement('li');

//add class

li.className ='todo-list-elem';

//text

//li.textContent = 'Text goes here '
li.textContent = text;

//create a Element
const link = document.createElement('a');
//add class

link.className = 'todo-list-elem-trash';


//create inner element

link.innerHTML = '<i class="fa fa-trash" ></i>';

li.appendChild(link)

//append to ul
ul.appendChild(li);

console.log(li);
console.log(link);
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    itemsList.push(input.value);
    localStorage.setItem('items',JSON.stringify(itemsList));
    makeLi(input.value);
    input.value = '';
});

data.forEach(item => {
    makeLi(item);
   ul.addEventListener('click',removeItem)
});

button.addEventListener('click',function(){
    localStorage.clear();
    itemsList = [];
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
})
function removeItem(e){
e.preventDefault
//console.log(e.target);
if(e.target.parentElement.classList.contains('todo-list-elem-trash')){
    //console.log('success');
    //e.target.parentElement.parentElement.remove();
    if(confirm('Are you sure to delete this item? ')){
        e.target.parentElement.parentElement.remove();
    }
    removeFromStorage(e.target.parentElement.parentElement)
}
}
function removeFromStorage(liItem){
    //console.log(liItem);
    
let itemsList = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
console.log(itemsList);
itemsList.forEach(function(singleElement, index){
    console.log(singleElement, index)
    if(liItem.textContent ===singleElement){
        itemsList.splice(index,1);
    }
});
console.log(itemsList);
localStorage.setItem('items',JSON.stringify(itemsList));
}