const toggler = document.querySelector(".btn");
toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

var darkmode = document.querySelector("label");
darkmode.addEventListener("click",changeBackground);


