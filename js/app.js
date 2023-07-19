var doc, form, links, length;

doc = document;
//will give us document html collection

//doc = document.all[0];
//doc = document.all[10];

length = document.all.length; //this will give you total number of elements in the document
doc  = document.domain;
doc  = document.URL;
doc  = document.characterSet;
doc  = document.doctype;

//links


links = document.links //this will return colection of links 
link = document.links[4];
link = document.links[4].className;
link = document.links[4].classList;

//html forms

form = document.forms;
form = document.forms[1];
form = document.forms[1].method;

//result 
console.log(doc);
console.log(length);
console.log(links);
console.log(form);