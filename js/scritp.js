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
            if(viewMoreBtn){
              viewMoreBtn.textContent = 'View More Services ';
            allCardsShown = false;
            }
            
        }
        
        // Button click handler
        if(viewMoreBtn){
          viewMoreBtn.addEventListener('click', () => {
            if (!allCardsShown) {
                showAllCards();
            } else {
                hideExtraCards();
            }
        });
        }
        


// Faq

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
   accordionItemHeader.addEventListener("click", event => {
    
    //  Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
       currentlyActiveAccordionItemHeader.classList.toggle("active");
       currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
     }

     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
     }
     else {
       accordionItemBody.style.maxHeight = 0;
     }
    
   });
});


// Casestudy accordian

const processAcc = document.querySelectorAll(".process-cntnt-bx");

for(let i = 0; i < processAcc.length; i++){
   processAcc[i].addEventListener("click", ()=>{
      processAcc[i].classList.toggle("active");
   })
}