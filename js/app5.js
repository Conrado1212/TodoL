var fomrBtn, from, title, btnReset;

fomrBtn = document.querySelector('#add');
from = document.querySelector('.form-body');
title = document.querySelector('.title');
btnReset = document.querySelector('.res-btn');


//click

fomrBtn.addEventListener('click',function(e){
    console.log(e.type);
    e.preventDefault();
})
//double click
fomrBtn.addEventListener('dblclick',function(e){
    console.log(e.type);
    e.preventDefault();
})

//mopuse

btnReset.addEventListener('mousedown',function(e){
    console.log(e.type);
    e.preventDefault();
})


//mopuse

btnReset.addEventListener('mouseup',eventTracker);
title.addEventListener('mouseleave',eventTracker);
from.addEventListener('mouseenter',eventTracker);
from.addEventListener('mousemove',eventTracker);

//dry dony reapet yoursel dont reapt the code

function eventTracker(e){
    console.log(e.type);
    e.preventDefault();
}
