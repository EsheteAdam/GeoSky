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
                        <ul class="list-group list-group-flush  ">
                            <li class="list-group-item "><strong class="strong">Region :</strong> ${
                                this.countryRegion
                            }</li>
                            <li class="list-group-item "><strong class="strong">Subregion :</strong> ${
                                this.countrySubregion
                            }</li>
                            <li class="list-group-item "><strong class="strong">Capital :</strong> ${
                                this.countryCapital
                            }</li>
                            <li class="list-group-item "><strong class="strong">Population :</strong> ${this.countryPop.toLocaleString()}</li>
                            <li class="list-group-item "><strong class="strong">Borders :</br></strong> ${
                                this.countryBorders
                            }</li>
                            <li class="list-group-item "><strong class="strong">Languages :</br></strong> ${
                                this.countryLanguages
                            }</li>
                            <li class="list-group-item "><strong class="strong">Currency :</strong> ${
                                this.countryCurrency
                            } (${this.countrySymbolCurrency})</li>
                            <li class="list-group-item ">
                                <h5 class="card-title-front text-center pt-3">Capital City Weather</h5>
                            </li>
                            <li class="list-group-item">
                            <div class=" justify-content-center align-items-center">
                            <h6 class=" text-center">${this.countryCapital}</h6>
                        </div>
                        
                                <div class="d-flex flex-column text-center">
                                    <h6 class="display-4 mb-0 font-weight-bold">13°C</h6>
                                    <span class="small" style="color: #868B94">Stormy</span>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1" style="font-size: 1rem;">
                                        <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1">40 km/h</span></div>
                                        <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1">84%</span></div>
                                        <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1">0.2h</span></div>
                                    </div>
                                    <div>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp" width="100px">
                                    </div>
                                </div>
                            </li>
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
