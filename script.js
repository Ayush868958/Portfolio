// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu when user clicks a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// =========================
// TYPING EFFECT
// =========================

// Change these according to your skills

const roles = [

    "Web Developer",

    "Java Developer",

    " C++ Programmer and developer",

    "Computer Science Student"

];


const typingText =
    document.getElementById("typingText");


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];


    if (deleting === false) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;


            if (roleIndex === roles.length) {

                roleIndex = 0;

            }

        }

    }


    let typingSpeed;

    if (deleting) {

        typingSpeed = 60;

    } else {

        typingSpeed = 100;

    }


    setTimeout(typeEffect, typingSpeed);

}


typeEffect();


// =========================
// CURRENT YEAR
// =========================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();