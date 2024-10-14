import {
    fetchAllCountries,
    fetchCountryByName,
    fetchCountriesByLanguage,
} from "./apiReq.js";

const init = async () => {
    await getAllCountries(); // או שפה אחרת לפי בחירה
};

const renderCountries = (countries) => {
    const resContainer = document.getElementById("res");
    resContainer.innerHTML = "";

    countries.forEach((country) => {
        const countryCard = country.render();
        resContainer.innerHTML += countryCard;
    });
};

const getAllCountries = async () => {
    try {
        const data = await fetchAllCountries();
        renderCountries(data);
    } catch (error) {
        console.error(`Error fetching all countries: ${error.message}`);
        throw error;
    }
};

const getCountryByName = async (country_name) => {
    try {
        const data = await fetchCountryByName(country_name);
        renderCountries(data);
    } catch (error) {
        console.error(`Error fetching all countries: ${error.message}`);
        throw error;
    }
};
const getCountriesByLanguage = async (language) => {
    try {
        const data = await fetchCountriesByLanguage(language);
        renderCountries(data);
    } catch (error) {
        console.error(`Error fetching countries by language: ${error.message}`);
    }
};
init();
