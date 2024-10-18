import CountryClass from "./ClassCountry.js";
import { apiKey } from "./apiKey.js";

const problematicCities = [
    { name: "Diego Garcia", lat: -7.314, lon: 72.414 },
    { name: "Ngerulmud", lat: 7.3667, lon: 134.5 },
    { name: "Papeetē", lat: -17.5333, lon: -149.5667 },
    { name: "St. Peter Port", lat: 49.465, lon: -2.533 },
    { name: "Fakaofo", lat: -9.165, lon: -171.182 },
    { name: "King Edward Point", lat: -54.2833, lon: -36.5 }, // Adding King Edward Point
];

const getCountryLanguages = (languages) =>
    languages ? Object.values(languages).join(", ") : "N/A";

const getCountryCurrency = (currencies) => {
    if (currencies && Object.keys(currencies).length > 0) {
        const currency = currencies[Object.keys(currencies)[0]];
        return { name: currency.name, symbol: currency.symbol };
    }
    return { name: "N/A", symbol: "N/A" };
};

const fetchWeatherData = async (capital) => {
    let url;
    const problematicCity = problematicCities.find(
        (city) => city.name === capital
    );

    // Determine the API URL based on city status
    url = problematicCity
        ? `https://api.openweathermap.org/data/2.5/weather?lat=${problematicCity.lat}&lon=${problematicCity.lon}&appid=${apiKey}&units=metric`
        : `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(
                `Could not fetch weather data for ${capital}: ${response.status}`
            );
        }

        const data = await response.json();
        // Return relevant weather data
        return {
            weather: data.weather[0].main,
            description: data.weather[0].description,
            temperature: data.main.temp.toFixed(1),
            humidity: data.main.humidity.toFixed(1),
            windSpeed: (data.wind.speed * 3.6).toFixed(1),
            icon: data.weather[0].icon,
            precipitation: data.clouds.all.toFixed(1),
        };
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return { error: `An error occurred while fetching weather data` };
    }
};

export const fetchAllCountries = async () => {
    const urlAllCountries = "https://restcountries.com/v3.1/all";

    try {
        const response = await fetch(urlAllCountries);
        if (!response.ok) {
            throw new Error(`Could not fetch countries: ${response.status}`);
        }

        const data = await response.json();
        const countriesWithWeather = await Promise.all(
            data.map(async (item) => {
                const {
                    name: { common: countryName },
                    flags: { svg: countryFlag },
                    capital,
                    population: countryPop,
                    region: countryRegion,
                    subregion: countrySubRegion,
                    languages,
                    currencies,
                } = item;

                const countryCapital = capital ? capital[0] : "N/A";
                const { name: countryCurrency, symbol: countryCurrencySymbol } =
                    getCountryCurrency(currencies);

                let weatherData = null;
                // Fetch weather data if capital is available
                if (countryCapital !== "N/A") {
                    weatherData = await fetchWeatherData(countryCapital);
                }

                return new CountryClass(
                    countryName,
                    countryFlag,
                    countryCapital,
                    countryPop,
                    countryRegion,
                    countrySubRegion,
                    getCountryLanguages(languages),
                    countryCurrency,
                    countryCurrencySymbol,
                    weatherData // Include weather data in class
                );
            })
        );

        return countriesWithWeather;
    } catch (error) {
        console.error("Error fetching countries:", error);
        throw error;
    }
};
