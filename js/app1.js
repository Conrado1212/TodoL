var title,id,className, textAlign, color,padding,back,visible, text, queryItem;
title = document.getElementById('title-form');
//id
id = document.getElementById('title-form').id;
id = title.id;
//classname
className = document.getElementById('title-form').className;

className = title.className;

console.log(title);
console.log('Project id: ', id);
console.log('Project clasName: ', className);

//add style

textAlign = document.getElementById('title-form').style.textAlign = "center";
color = title.style.color = 'lightBlue';
padding = title.style.padding = '20px';
back = title.style.backgroundColor = 'red';
visible = title.style.display = 'none';
visible = title.style.display = 'block';

//add text innerHTML

text = title.textContent = 'Test';
text = title.innerText = 'Test123';

//add innerHTML

text = title.innerHTML = '<div class="new-title-form"><span style="font-size:50px;">Title</span></div>';

//querySelector
queryItem =  document.querySelector('#title-form');
queryItem =  document.querySelector('.title');
queryItem =  document.querySelector('.todo-list-elem').style.backgroundColor = "black";
queryItem =  document.querySelector('li:last-child.todo-list-elem').style.backgroundColor = "green";
queryItem =  document.querySelector('li:nth-child(2).todo-list-elem').style.backgroundColor = "orange";
queryItem =  document.querySelector('li:nth-child(3).todo-list-elem').style.backgroundColor = "yellow";

queryItem =  document.querySelector('li:last-child.todo-list-elem').textContent = "This is added by query Selector";

console.log(queryItem);
