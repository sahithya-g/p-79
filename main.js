menu_list_array = ["Veg Margherita Pizza","Chicken Tandoori Pizza","Delux veggie pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Veg Extrvaganza Pizza"];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>'+menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div class="card">'+'<img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg"/>'
    +menu_list_array[i]+'</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addmenu").innetHTML=htmldata;
}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}