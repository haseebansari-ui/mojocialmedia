"use strict"

// scroll Header

window.onscroll = function() {headerScroll()};

var header = document.querySelector(".header");
var sticky = header.offsetTop;

function headerScroll() {
  if (window.pageYOffset > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}


// Menue

const openMenuBtn = document.querySelector(".menu-open");
const closeMenuBtn = document.querySelector(".menu-close");
const opneMenue = document.querySelector("nav");

if(openMenuBtn){
  openMenuBtn.addEventListener("click", ()=>{
    opneMenue.classList.add("active");
  })
}
if(closeMenuBtn){
  closeMenuBtn.addEventListener("click", ()=>{
    opneMenue.classList.remove("active");
  })
  
}

