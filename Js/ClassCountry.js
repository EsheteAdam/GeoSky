export default class CountryClass {
    constructor({
        name,
        flag,
        capital,
        population,
        region,
        subregion,
        languages,
        currency,
        currencySymbol,
        weatherData,
    }) {
        this.countryName = name; // שם המדינה
        this.countryFlag = flag; // דגל המדינה
        this.countryCapital = capital; // עיר בירה
        this.countryPop = population; // אוכלוסיה
        this.countryRegion = region; // יבשת
        this.countrySubRegion = subregion; // תת-יבשת
        this.countryLanguages = languages; // שפות
        this.countryCurrency = currency; // מטבע
        this.countryCurrencySymbol = currencySymbol; // סמל המטבע
        this.weatherData = weatherData; // נתוני מזג האוויר
    }

    // Method to return the country data without additional calculations
    getCountryData() {
        return {
            name: this.countryName,
            flag: this.countryFlag,
            capital: this.countryCapital,
            population: this.countryPop,
            region: this.countryRegion,
            subregion: this.countrySubRegion,
            languages: this.countryLanguages,
            currency: this.countryCurrency,
            currencySymbol: this.countryCurrencySymbol,
            weatherData: this.weatherData,
        };
    }

    // Method to render the country card
    renderCard(parentElement) {
        const card = document.createElement("div");
        card.classList.add("card", "m-3");

        card.innerHTML = `
            <img src="${this.countryFlag}" alt="${
            this.countryName
        }" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${this.countryName}</h5>
                <p class="card-text"><strong>Capital:</strong> ${
                    this.countryCapital
                }</p>
                <p class="card-text"><strong>Population:</strong> ${
                    this.countryPop ? this.countryPop.toLocaleString() : "N/A"
                }</p>
                <p class="card-text"><strong>Region:</strong> ${
                    this.countryRegion
                }</p>
                <p class="card-text"><strong>Subregion:</strong> ${
                    this.countrySubRegion
                }</p>
                <p class="card-text"><strong>Languages:</strong> ${this.countryLanguages.join(
                    ", "
                )}</p>
                <p class="card-text"><strong>Currency:</strong> ${
                    this.countryCurrency
                } (${this.countryCurrencySymbol})</p>
                <p class="card-text"><strong>Weather:</strong> ${
                    this.weatherData
                        ? `${this.weatherData.weather}, ${this.weatherData.temperature}°C`
                        : "No data"
                }</p>
            </div>
        `;

        parentElement.appendChild(card);
        return card; // Return the card element if needed for further use
    }
}
