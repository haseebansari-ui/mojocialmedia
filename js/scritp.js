"use strict"

// scroll Header

// window.onscroll = function() {headerScroll()};

// var header = document.querySelector("header");
// var sticky = header.offsetTop;

// function headerScroll() {
//   if (window.pageYOffset > 0) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// }

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 0) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }

    });

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



// Loader

setTimeout(() => {
  let loader = document.querySelector(".loader-wrapper")

  if(loader){
    loader.style.display = "none";
  }

}, 5000);

// Login Form

const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let isValid = true;

    // Reset Errors
    emailError.textContent = "";
    passwordError.textContent = "";

    email.classList.remove("error");
    password.classList.remove("error");

    // Email Validation

    if (email.value.trim() === "") {

        emailError.textContent = "Email is required.";

        email.classList.add("error");

        isValid = false;

    } else if (!validateEmail(email.value.trim())) {

        emailError.textContent = "Please enter a valid email address.";

        email.classList.add("error");

        isValid = false;

    }

    // Password Validation

    if (password.value.trim() === "") {

        passwordError.textContent = "Password is required.";

        password.classList.add("error");

        isValid = false;

    } else if (password.value.length < 8) {

        passwordError.textContent = "Password must be at least 8 characters.";

        password.classList.add("error");

        isValid = false;

    }

    // Form Submitted Successfully

    if (isValid) {

        alert("Login Successful!");

        loginForm.submit();

    }

});

function validateEmail(email) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}

[email, password].forEach(input => {

    input.addEventListener("input", function () {

        this.classList.remove("error");

        if (this.id === "email") {

            emailError.textContent = "";

        } else {

            passwordError.textContent = "";

        }

    });

});

const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.innerHTML =
            '<i class="ri-eye-off-line"></i>';

    } else {

        password.type = "password";

        togglePassword.innerHTML =
            '<i class="ri-eye-line"></i>';

    }

});

const loginBtn = document.getElementById("loginBtn");

const btnText = loginBtn.querySelector(".btn-text");

const loader = loginBtn.querySelector(".btn-loader");

btnText.style.display = "none";

loader.style.display = "inline-block";

btnText.style.display = "inline";

loader.style.display = "none";