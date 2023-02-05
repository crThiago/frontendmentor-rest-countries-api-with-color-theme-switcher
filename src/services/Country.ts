interface Country {
  code: string,
  name: {
    common: string
    native: string
  }
  population: string
  region: string
  subregion: string
  capital: string
  topLevelDomain: string
  flag: string
  currencies: string[]
  languages: string[]
  borders: string[]
}
