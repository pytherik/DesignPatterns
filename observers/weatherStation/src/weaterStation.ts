import {Observer, Subject, WeatherFacts} from "./interfaces";

export class WeaterStation implements Subject {
  private temperature: number = 0;
  private humidity: number = 0;

  private observers: Observer[] = [];

  setTemperature(temp: number): void {
    console.log('Wetterstation: neue Temperaturmessung: ' + temp);
    this.temperature = temp;
    this.notifyObservers()
  }

  setHumidity(humidity: number): void {
    this.humidity = humidity;
    this.notifyObservers();
  }

  public registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  public notifyObservers() {
    const weatherFacts: WeatherFacts = {
      temperature: this.temperature,
      humidity: this.humidity,
    };
    this.observers.forEach(observer => {
      observer.update(weatherFacts);
    })
  }
}
