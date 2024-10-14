import CountryClass from "./ClassCountry.js";

export const fetchAllCountries = async () => {
    try {
        const url = "https://restcountries.com/v3.1/all";
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Fetching all countries failed: ${res.status}`);
        }

        const data = await res.json();

        return data.map((country) => {
            return new CountryClass(
                country.name.common,
                country.flags.svg,
                country.region || "N/A",
                country.subregion || "N/A",
                country.capital ? country.capital[0] : "N/A",
                country.population || "N/A",
                country.borders || "N/A",
                country.languages
                    ? Object.values(country.languages).join(", ")
                    : "N/A",
                Object.keys(country.currencies || {})[0] || "N/A",
                country.currencies
                    ? Object.values(country.currencies)[0]?.symbol || "N/A"
                    : "N/A"
            );
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    }
};

export const fetchCountryByName = async (country_name) => {
    try {
        const url = `https://restcountries.com/v3.1/name/${country_name}`;
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(
                `Fetching country by name:${country_name}, has been failed: ${res.status}`
            );
        }

        const data = await res.json();

        return data.map((country) => {
            return new CountryClass(
                country.name.common,
                country.flags.svg,
                country.region || "N/A",
                country.subregion || "N/A",
                country.capital ? country.capital[0] : "N/A",
                country.population || "N/A",
                country.borders || [],
                country.languages
                    ? Object.values(country.languages).join(", ")
                    : "N/A",
                Object.keys(country.currencies || {})[0] || "N/A",
                country.currencies
                    ? Object.values(country.currencies)[0]?.symbol || "N/A"
                    : "N/A"
            );
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    }
};

export const fetchCountriesByLanguage = async (language) => {
    try {
        const url = `https://restcountries.com/v3.1/lang/${language}
        `;
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(
                `Fetching countries by language:${language}, has been failed: ${res.status}`
            );
        }

        const data = await res.json();

        return data.map((country) => {
            return new CountryClass(
                country.name.common,
                country.flags.svg,
                country.region || "N/A",
                country.subregion || "N/A",
                country.capital ? country.capital[0] : "N/A",
                country.population || "N/A",
                country.borders || [],
                country.languages
                    ? Object.values(country.languages).join(", ")
                    : "N/A",
                Object.keys(country.currencies || {})[0] || "N/A",
                country.currencies
                    ? Object.values(country.currencies)[0]?.symbol || "N/A"
                    : "N/A"
            );
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    }
};
