class City {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  toString() {
    console.log(`city is ${this.name}`)
  }
}

class Xian extends City {
  constructor(name: string) {
    super(name)
  }
}

class Changchun extends City {
  constructor(name: string) {
    super(name)
  }
}

class SimpleCityFactory {
  createCity(name: string): City {
    let city: City;
    switch (name) {
      case 'xian':
        city = new Xian('xian');
        break;
      case 'changchun':
        city = new Changchun('changchun');
        break;
      default:
        city = new Changchun('changchun')
    }
    return city;
  }
}

class CityStore {
  simpleCityFactory: SimpleCityFactory;
  constructor(simpleCityFactory: SimpleCityFactory) {
    this.simpleCityFactory = simpleCityFactory
  }
  selectCity(name: string): City {
    let city: City;
    city = this.simpleCityFactory.createCity(name)
    return city;
  }
}

class CityTest {
  main() {
    let factory = new SimpleCityFactory();
    let store = new CityStore(factory);
    let city = store.selectCity('xian')
    city.toString();
  }
}

new CityTest().main()
