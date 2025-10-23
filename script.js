

//select popupbox,overlay and button
var popupoverlay=document.querySelector(".pop-overlay");
var popupbox=document.querySelector(".popup-box");
var button=document.getElementById("pop-button");
button.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})
//cancel button working
var cancel_button=document.getElementById("cancel-button");
cancel_button.addEventListener("click",function(event){
             event.preventDefault();
             popupoverlay.style.display="none";
             popupbox.style.display="none";

})
//add button
//select container,add-button,book-title-input,book-author-input,textarea-input
var container=document.querySelector(".container");
var addbutton=document.getElementById("add-button");
var title=document.getElementById("book-title-input");
var author=document.getElementById("book-author-input");
var textarea=document.getElementById("textarea-input")
addbutton.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","Book-container");
    div.innerHTML=`<h2>${title.value}</h2>`;
    div.innerHTML+=`<h5>${author.value}</h5>`;
    div.innerHTML+=`<p>${textarea.value}</p>`;
    div.innerHTML+=`<button onclick="delete_element(event)">Delete</button>`;
    container.append(div);
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})
//delete button
function delete_element(event){
    event.target.parentElement.remove();
}