import { apiKey } from "./apiKey.js";

// List of cities that have issues when fetching weather data
const problematicCities = [
    { name: "Diego Garcia", lat: -7.314, lon: 72.414 },
    { name: "Ngerulmud", lat: 7.3667, lon: 134.5 },
    { name: "Papeetē", lat: -17.5333, lon: -149.5667 },
    { name: "St. Peter Port", lat: 49.465, lon: -2.533 },
    { name: "Fakaofo", lat: -9.165, lon: -171.182 },
    { name: "King Edward Point", lat: -54.2833, lon: -36.5 },
];

// Cache key and time interval to avoid too many API calls
const weatherCacheKey = "weatherData";
const checkInterval = 3 * 60 * 1000; // 3 minutes

// Function to fetch all countries and their weather data
export const fetchAllCountries = async () => {
    const url = "https://restcountries.com/v3.1/all";
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`${res.status} - ${res.statusText}`);
        }
        const countries = await res.json();

        // Fetch weather for each country, if capital exists
        const countriesWithWeather = await Promise.all(
            countries.map(async (country) => {
                const capital = country.capital ? country.capital[0] : null;
                let weatherData = null;

                if (capital) {
                    weatherData = await getWeatherData(capital);
                }

                console.log(`${country.name.common} weather:`, weatherData); // Debug log

                return {
                    name: country.name.common,
                    flag: country.flags?.png,
                    capital: capital || "N/A",
                    population: country.population,
                    region: country.continents ? country.continents[0] : "N/A",
                    subregion: country.subregion || "N/A",
                    languages: country.languages
                        ? Object.values(country.languages)
                        : ["N/A"],
                    currency: country.currencies
                        ? Object.values(country.currencies)[0]?.name
                        : "N/A",
                    currencySymbol: country.currencies
                        ? Object.values(country.currencies)[0]?.symbol
                        : "N/A",
                    weatherData, // This must not be null
                };
            })
        );

        return countriesWithWeather;
    } catch (error) {
        console.error("Failed to fetch data:", error.message);
        return null;
    }
};

// Function to fetch weather data for a specific city
const getWeatherData = async (cityName) => {
    const cachedWeatherData =
        JSON.parse(localStorage.getItem(weatherCacheKey)) || {};

    // Use cached data if it's still fresh
    if (cachedWeatherData[cityName]) {
        const currentTime = new Date().getTime();
        const cacheTime = cachedWeatherData[cityName].timestamp || 0;

        if (currentTime - cacheTime < checkInterval) {
            return cachedWeatherData[cityName].data;
        }
    }

    // Handle problematic cities by using lat/lon instead of city name
    const problematicCity = problematicCities.find(
        (city) => city.name === cityName
    );

    let url;
    if (problematicCity) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${problematicCity.lat}&lon=${problematicCity.lon}&units=metric&appid=${apiKey}`;
    } else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    }

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`${res.status} - ${res.statusText}`);
        }
        const data = await res.json();

        // Extract and format relevant weather info
        const weatherInfo = {
            weather: data.weather[0].main,
            description: data.weather[0].description,
            temperature: data.main.temp.toFixed(1),
            feelsLike: data.main.feels_like.toFixed(1),
            humidity: data.main.humidity,
            windSpeed: (data.wind.speed * 3.6).toFixed(1), // Convert m/s to km/h
            icon: data.weather[0].icon,
            precipitation: data.rain ? data.rain["1h"] || 0 : 0,
        };

        // Cache the weather data for future use
        cachedWeatherData[cityName] = {
            data: weatherInfo,
            timestamp: new Date().getTime(),
        };
        localStorage.setItem(
            weatherCacheKey,
            JSON.stringify(cachedWeatherData)
        );

        return weatherInfo;
    } catch (error) {
        console.error("Failed to fetch weather data:", error.message);
        return null;
    }
};
