export default class CountryClass {
    constructor(
        countryName,
        countryFlag,
        countryCapital,
        countryPop,
        countryRegion,
        countrySubRegion,
        countryLanguages,
        countryCurrency,
        countryCurrencySymbol,
        weatherData
    ) {
        this.countryName = countryName;
        this.countryFlag = countryFlag;
        this.countryCapital = countryCapital;
        this.countryPop = countryPop;
        this.countryRegion = countryRegion;
        this.countrySubRegion = countrySubRegion;
        this.countryLanguages = countryLanguages;
        this.countryCurrency = countryCurrency;
        this.countryCurrencySymbol = countryCurrencySymbol;
        this.weatherData = weatherData;
    }
}
