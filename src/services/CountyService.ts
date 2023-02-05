import axios from "axios";

class CountyService {

  public async getCountries(): Promise<Country[]> {
    return await axios.get('https://restcountries.com/v2/all')
  }

  public async getCountry(code: string): Promise<Country> {
    return await axios.get(`https://restcountries.com/v2/alpha/${code}`)
  }

  public formatData(data: object): Country {
    return {
      code: data.alpha2Code,
      name: {
        common: data.name,
        native: data.nativeName
      },
      population: data.population.toLocaleString(),
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      topLevelDomain: data.topLevelDomain[0],
      flag: data.flags.svg,
      currencies: data.currencies.map((currency: object) => currency.name),
      languages: data.languages.map((language: object) => language.name),
      borders: data.borders,
    }
  }
}

export default new CountyService()
