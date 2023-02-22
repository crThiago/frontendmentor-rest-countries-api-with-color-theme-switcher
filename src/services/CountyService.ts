import axios from "axios";
import {Country} from "@/services/Country";

class CountyService {

  public async getCountries(): Promise<Country[]> {
    return await axios.get('https://restcountries.com/v2/all')
  }

  public async getCountriesByRegion(region: string): Promise<Country[]> {
    return await axios.get(`https://restcountries.com/v2/region/${region}`)
  }

  public async getCountriesByName(name: string): Promise<Country[]> {
    return await axios.get(`https://restcountries.com/v2/name/${name}`)
  }

  public async getCountry(code: string): Promise<Country> {
    return await axios.get(`https://restcountries.com/v2/alpha/${code}`)
  }

  public mapFormatData(data: any): Country[] {
    return data.map((country: object) => this.formatData(country));
  }

  public formatData(data: any): Country {
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
      currencies: data.currencies?.map((currency: any) => currency.name),
      languages: data.languages.map((language: any) => language.name),
      borders: data.borders,
    }
  }
}

export default new CountyService()
