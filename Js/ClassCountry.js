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
        const weatherInfo = this.weatherData || {};

        const card = document.createElement("div");
        card.classList.add("card", "px-3", "py-4", "m-3");

        card.innerHTML = `
      <div class="flip-card">
          <div class="flip-card-inner">
              <div class="flip-card-front rounded-4">
                  <img src="${
                      this.countryFlag
                  }" class="card-img-top rounded-top-4 " alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${this.countryName}</h5>
                      <p class="card-text"></p>
                  </div>
                  <div class="btn-front-div">
                      <a href="#" class="btn btn-primary btn-lg">Go somewhere</a>
                  </div>
              </div>
              <div class="flip-card-back rounded-4">
                  <div class="back-title">
                      <h5 class="card-title">${this.countryName}</h5>
                  </div>
                  <div class="card-body-back">
                      <ul class="list-group list-group-flush">
                          <li class="list-group-item">An item</li>
                          <li class="list-group-item">A second item</li>
                          <li class="list-group-item">A third item</li>
                          <li class="list-group-item">A fourth item</li>
                          <li class="list-group-item">And a fifth one</li>
                      </ul>
                      <div class="text-body">
      <div class="card-body p-4">
          <div class="d-flex flex-column text-center mt-5 mb-4">
              <h6 class="display-4 mb-0 font-weight-bold">${
                  weatherInfo.temperature || "N/A"
              }°C</h6>
              <span class="small" style="color: #868B94">${
                  weatherInfo.weather || "No data"
              }</span>
              <span class="small" style="color: #868B94">Feels like: ${
                  weatherInfo.feelsLike || "N/A"
              }°C</span>
          </div>
          <div class="d-flex align-items-center">
              <div class="flex-grow-1" style="font-size: 1rem;">
                  <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${
                      weatherInfo.windSpeed || "N/A"
                  } km/h </span></div>
                  <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> Humidity: ${
                      weatherInfo.humidity || "N/A"
                  }% </span></div>
                  <div><i class="fas fa-cloud-rain fa-fw" style="color: #868B94;"></i> <span class="ms-1"> Precipitation: ${
                      weatherInfo.precipitation || 0
                  } mm </span></div>
              </div>
              <div>
                  <img src="https://openweathermap.org/img/wn/${
                      weatherInfo.icon || "01d"
                  }.png" width="100px">
              </div>
          </div>
      </div>
  </div>
                    </div>
                  </div>
                  <div class="btn-back-div">
                      <a href="#" class="btn btn-primary btn-lg">Go somewhere</a>
                  </div>
              </div>
          </div>
      </div>
      `;

        parentElement.appendChild(card);
        return card;
    }
}
