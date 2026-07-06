

const card = document.getElementById("card");


window.addEventListener("preloader",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("hide");

document.body.style.overflow="auto";

},2000);

});