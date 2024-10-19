import { fetchAllCountries } from "./apiReq.js";
import CountryClass from "./ClassCountry.js";

const init = () => {
    getAllCountries();
};

// Function to fetch all countries from the API
const getAllCountries = async () => {
    try {
        const resultData = await fetchAllCountries();
        if (resultData) {
            renderAllCountries(resultData); // Render countries after mapping
        } else {
            console.error("No data returned.");
        }
    } catch (error) {
        console.error("Failed to fetch data:", error.message);
    }
};

// Function to render all countries on the screen
const renderAllCountries = (countries) => {
    const resultDiv = document.getElementById("res");
    resultDiv.innerHTML = ""; // Clear existing content

    countries.forEach((countryData) => {
        const countryInstance = new CountryClass(countryData);
        countryInstance.renderCard(resultDiv); // Call the method from the class to render the card
    });
};

// Start the application
init();
