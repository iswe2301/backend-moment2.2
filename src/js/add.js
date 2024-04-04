"use strict";

// Importerar url som modul
import { url } from './experiences.js';

// Asynkron funktion som lägger till ny jobberfarenhet
export async function createExperience(companyname, jobtitle, location, startdate, enddate, description) {

    // Skapar ett nytt objekt för jobberfarenheten
    let workexperience = {
        companyname: companyname,
        jobtitle: jobtitle,
        location: location,
        startdate: startdate,
        enddate: enddate,
        description: description
    }

    // Skickar ett POST-anrop med fetch API till webbtjänsten med objektet som skapats för erfarenheten
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(workexperience)
    });

    // Inväntar svar och omvandlar till json
    const data = await response.json();
}