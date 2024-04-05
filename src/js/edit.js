"use strict";

// Importerar variabel som modul
import { errorMsg } from './main.js';

// Hämtar element från DOM och lagrar i variabler
const editFormContainer = document.getElementById("edit-container");
const editContainer = document.getElementById("edit-form-container");
let experienceID = null; // Skapar en global variabel för erfarenhetens ID och sätter initalt till null

// Funktion för att fylla i redigeringsformuläret med specifik erfarenhet
export function fillEditForm(experience) {
    experienceID = experience.id; // Sätter erfarenhetens ID till det specifika ID:et för erfarenheten
    // Visar redigeringsformuläret
    editFormContainer.style.display = "block";
    // Scrollar till formulärets position med ett mjukt beteende
    editFormContainer.scrollIntoView({ behavior: "smooth" });

    // Fyller i formuläret med uppgifterna för den valda erfarenheten
    editContainer.companyname.value = experience.companyname;
    editContainer.jobtitle.value = experience.jobtitle;
    editContainer.location.value = experience.location;
    editContainer.startdate.value = experience.startdate.substring(0, 10);

    // Kontrollerar om enddate finns
    if (experience.enddate) {
        editContainer.enddate.value = experience.enddate.substring(0, 10);
    } else {
        editContainer.enddate.value = ""; // Lämnar fältet tomt om enddate är null/pågående
    }
    editContainer.description.value = experience.description;

    // Hämtar alla input, date och textarea-element från formuläret och lagrar i variabel
    const formInputs = editContainer.querySelectorAll("input, date, textarea");

    // Lägger till händelselyssnare för varje input och select i formuläret
    formInputs.forEach(input => {
        input.addEventListener("input", () => {
            // Kontrollerar om formuläret är giltigt
            if (editContainer.checkValidity()) {
                errorMsg.style.display = "none"; // Döljer felmeddelandet när fomruläret är giltigt
            }
        });
    });
}