class CountryClass {
    constructor(
        countryName,
        countryFlag,
        countryRegion,
        countrySubregion,
        countryCapital,
        countryPop,
        countryBorders,
        countryLanguages,
        countryCurrency,
        countrySymbolCurrency
    ) {
        this.countryName = countryName;
        this.countryFlag = countryFlag;
        this.countryRegion = countryRegion;
        this.countrySubregion = countrySubregion;
        this.countryCapital = countryCapital;
        this.countryPop = countryPop;
        this.countryBorders = countryBorders;
        this.countryLanguages = countryLanguages;
        this.countryCurrency = countryCurrency;
        this.countrySymbolCurrency = countrySymbolCurrency;
    }

    render() {
        return `
        <div class="card">
            <div class="card-inner">
                <div class="card-front rounded-4">
                    <img src="${this.countryFlag}" class="card-img-top" alt="${
            this.countryName
        } flag">
                    <div class="card-body-front">
                        <h5 class="card-title-front text-center">${
                            this.countryName
                        }</h5>
                        <p class="card-text"></p>
                        <div class="btn-div-front">
                            <button href="#" class="btn-card-front">Get More</button>
                        </div>
                    </div>
                </div>
                <div class="card-back rounded-4">
                    <div class="card-body-back">
                        <h5 class="card-title-back text-center pt-3">${
                            this.countryName
                        } - <img src="${
            this.countryFlag
        }" style="width:30px;" alt="${this.countryName} flag"></h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Region:</strong> ${
                                this.countryRegion
                            }</li>
                            <li class="list-group-item"><strong>Subregion:</strong> ${
                                this.countrySubregion
                            }</li>
                            <li class="list-group-item"><strong>Capital:</strong> ${
                                this.countryCapital
                            }</li>
                            <li class="list-group-item"><strong>Population:</strong> ${this.countryPop.toLocaleString()}</li>
                            <li class="list-group-item"><strong>Borders:</strong> ${
                                this.countryBorders
                            }</li>
                            <li class="list-group-item"><strong>Languages:</strong> ${
                                this.countryLanguages
                            }</li>
                            <li class="list-group-item"><strong>Currency:</strong> ${
                                this.countryCurrency
                            } (${this.countrySymbolCurrency})</li>
                            <li class="list-group-item"><strong>
                            <h5 class="card-title-front text-center pt-3">Capital City Weather</h5>
                            </strong></li>
                        </ul>
                        
                        <div class="text-center btn-div-back">
                            <button href="#" class="btn-card-back">Get More</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

export default CountryClass;
