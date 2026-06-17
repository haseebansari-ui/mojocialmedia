"use strict"

// scroll Header

window.onscroll = function() {headerScroll()};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function headerScroll() {
  if (window.pageYOffset > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
