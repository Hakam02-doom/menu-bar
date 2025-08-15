let menu = document.getElementById('menulist');
menu.style.maxHeight = "0px"
function toggleMenu(){
    if(menu.style.maxHeight == "0px"){
        menu.style.maxHeight = "300px";
    }
    else{
        menu.style.maxHeight = "0px"
    }
}