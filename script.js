const toggler = document.querySelector(".btn");
toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

var darkmode = document.querySelector("label");
darkmode.addEventListener("click",changeBackground);

function changeBackground(){
    document.querySelector("body").style.backgroundColor = "black";
}

var lightmode = document.querySelector('label');
lightmode.addEventListener("click", changeLightBackground);

function changeLightBackground(){
    document.querySelector(".content").style.backgroundColor = "white";
}
