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

// Solution

const items = document.querySelectorAll(".solution-item");
const previews = document.querySelectorAll(".solution-preview");

items.forEach(item => {
    item.addEventListener("mouseenter", () => {
        const target = item.getAttribute("data-target");

        items.forEach(i => i.classList.remove("active"));
        previews.forEach(p => p.classList.remove("active"));

        item.classList.add("active");
        document
            .getElementById(`content-${target}`)
            .classList.add("active");
    });
});

// Services 


// Get all service items
        const serviceItems = document.querySelectorAll('.srv-item');
        const viewMoreBtn = document.getElementById('viewMoreBtn');
        
        // Number of cards to show initially
        const initialCardsCount = 6;
        
        // Track if all cards are currently shown
        let allCardsShown = false;
        
        // Function to show all cards
        function showAllCards() {
            serviceItems.forEach((item, index) => {
                if (index >= initialCardsCount) {
                    item.classList.remove('hidden');
                    item.classList.add('show');
                }
            });
            viewMoreBtn.textContent = 'Show Less';
            allCardsShown = true;
        }
        
        // Function to hide extra cards (show only initial 6)
        function hideExtraCards() {
            serviceItems.forEach((item, index) => {
                if (index >= initialCardsCount) {
                    item.classList.remove('show');
                    item.classList.add('hidden');
                }
            });
            viewMoreBtn.textContent = 'View More Services ';
            allCardsShown = false;
        }
        
        // Button click handler
        viewMoreBtn.addEventListener('click', () => {
            if (!allCardsShown) {
                showAllCards();
            } else {
                hideExtraCards();
            }
        });


// Faq

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {

    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {

        const activeItem = document.querySelector(".accordion-item.active");

        if (activeItem && activeItem !== item) {
            activeItem.classList.remove("active");
            activeItem.querySelector(".accordion-content").style.maxHeight = null;
        }

        item.classList.toggle("active");

        const content = item.querySelector(".accordion-content");

        if (item.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });

});

window.addEventListener("load", () => {
    const activeContent = document.querySelector(
        ".accordion-item.active .accordion-content"
    );

    if (activeContent) {
        activeContent.style.maxHeight =
            activeContent.scrollHeight + "px";
    }
});
