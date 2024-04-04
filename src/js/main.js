"use strict";

// Importerar modul
import { fetchExperiences } from './experiences.js';
import { createExperience } from './add.js';

// Hämtar element och lagrar i variabler
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-xmark");
const containerEl = document.getElementById("overlay");
const submitBtn = document.getElementById("submit");

// Skapar klickhändelselyssnare för menyknappen, anonym funktion
menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("show"); // Växlar mellan klassen show för att visa/dölja mobilmenyn
    containerEl.classList.toggle("opacity"); // Växlar mellan visa/dölja opacity när menyn klickas

    // Kontrollerar om mobilmenyn visas eller inte
    if (mobileMenu.classList.contains("show")) {
        // Om menyn visas, gör hamburgerikonen osynlig och kryssikonen synlig
        menuIcon.style.opacity = "0";
        closeIcon.style.opacity = "1";
        closeIcon.style.transform = "translate(-50%, -50%) rotate(360deg)"; // Animerar kryssikonen med en rotation på 360 grader
    } else {
        // Om menyn inte visas, gör hamburgerikonen synlig och kryssikonen osynlig
        menuIcon.style.opacity = "1";
        closeIcon.style.opacity = "0";
        closeIcon.style.transform = "translate(-50%, -50%) rotate(-360deg)"; // Återställer kryssikonens rotation
    }
});

// Skapar initieringsfunktion som körs när webbsidan laddats
window.onload = init;
function init() {
    fetchExperiences(); // Anropar funktion för att hämta arbetserfarenheter

    // Kontrollerar om submit-knappen finns på sidan
    if (submitBtn) {

        // Skapar isåfall en händelselyssnare vid klick
        submitBtn.addEventListener("click", (event) => {
            event.preventDefault(); // Förhindrar formulärets standardbeteende (så att sidan inte laddas om)

            // Hämtar värdena från formuläret
            const companyname = document.getElementById('companyname').value;
            const jobtitle = document.getElementById('jobtitle').value;
            const location = document.getElementById('location').value;
            const startdate = document.getElementById('startdate').value;
            const enddate = document.getElementById('enddate').value;
            const description = document.getElementById('description').value;

            // Anropar funktion för att skapa ny jobberfarenhet, skickar med värdena från formuläret
            createExperience(companyname, jobtitle, location, startdate, enddate, description);

        });
    }
}