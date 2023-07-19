document.querySelector('.res-btn').addEventListener('click',function(e){

    //alert('The reset Btn is clicked');
    console.log('The reset Btn is clicked');
    e.preventDefault();
})

document.querySelector('#add').addEventListener('click',onClick);
//document.querySelector('#add').addEventListener('mouseover',onClick);

function onClick(e){
    console.log('The reset Btn is clicked');
    e.preventDefault();
    console.log(e);
    console.log(e.target);


    console.log(e.target.parentNode);
    console.log(e.target.parentNode.id);
    console.log(e.target.parentNode.classList);

    console.log(e.timeStamp);
    console.log(e.pageX);
    console.log(e.pageY);
}