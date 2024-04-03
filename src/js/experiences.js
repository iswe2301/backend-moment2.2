"use strict";

const url = "https://backend-moment2-1.onrender.com/api/workexperience"; // Lagrar url för API

// Asynkron funktion för att hämta data (exporteras som modul)
export async function fetchExperiences() {
    try {
        const response = await fetch(url); // Inväntar fetchanrop
        const data = await response.json(); // Inväntar svar och omvandlar till json
        displayExperiences(data); // Anropar funktion för att visa erfarenheter med svaret från anropet
    } catch (error) {
        console.error('Felmeddelande:', error); // Fångar upp ev. felmeddelanen
    }
}