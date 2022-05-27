
function myFunction(){
    document.querySelector(".dropdown-content").classList.toggle("show");
    document.querySelector(".myImage").style.transform = "rotate(180deg)"; 
    document.querySelector(".iconArrow-dark1").style.transform = "rotate(180deg)";
    //close the dropdown on click outside of it
}
function Contactdrop(){
    document.getElementById("Contact").classList.toggle("show");
    document.querySelector(".dImage").style.transform = "rotate(180deg)"; 
    document.querySelector(".iconArrow-dark2").style.transform = "rotate(180deg)";
    
}
function connect(){
    document.getElementById("Connect").classList.toggle("show");
    document.querySelector(".dImageArrow").style.transform = "rotate(180deg)"; 
    document.querySelector(".iconArrow-dark3").style.transform = "rotate(180deg)";
}

window.onclick = function(e){
    if(!e.target.matches('.dropbtn')){
        var dropDown = document.querySelector(".dropdown-content");
        var arrbtn = document.querySelector(".myImage");
        var dropDownTwo = document.getElementById("Connect");
        var arrtbn2 = document.querySelector(".dImage");
    }
    if(dropDown.classList.contains('show')){
        dropDown.classList.remove('show')
        arrbtn.style.transform = "rotate(360deg)";
        dropDownTwo.classList.remove('show');
        arrtbn2.style.transform = "rotate(360deg)";

    }
    
}
window.onclick = function(e){
    if(!e.target.matches('.dropbtn')){
        var dropDownTwo = document.getElementById("Connect");
        var arrtbn2 = document.querySelector(".dImage");
    }
    if(dropDown.classList.contains('show')){
        dropDownTwo.classList.remove('show');
        arrtbn2.style.transform = "rotate(360deg)";

    }
    
}
//Open Mobile
function openMobile(){
    document.getElementById("nav-mobile").style.display ="flex";
    document.querySelector(".icon-open").style.display="none";
    document.querySelector(".icon-close").style.display="block";
}
//Close Mobile
function closeMobile(){
    document.getElementById("nav-mobile").style.display ="none";
    document.querySelector(".icon-open").style.display="block";
    document.querySelector(".icon-close").style.display="none";
}
