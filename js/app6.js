//even bubbling and event delegation

// document.querySelector('.todo-list-elem').addEventListener('click',todoL);

// function todoL(){
//     console.log('succes');
// }


// document.querySelector('.todo-list').addEventListener('click',todoL2);

// function todoL2(){
//     console.log('succes2');
// }


// document.querySelector('.list').addEventListener('click',todoL3);

// function todoL3(){
//     console.log('succes3');
// }

//event delegation the target the parent

// document.querySelector('.todo-list-elem-trash').addEventListener('click',function(){
//     console.log('sssss');
// });

var list = document.querySelector('.list').addEventListener('click',function(e){
    if(e.target.className ==='fa fa-trash'){
        var parent = e.target.parentNode.parentNode;
        parent.remove();
        console.log(parent);
        
    }else{
        console.log('outside');
    }
    
})