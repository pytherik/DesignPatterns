export interface Subject {
  registerObserver(o: Observer): void;
  notifyObservers(o: Observer): void;
}

export interface Observer {
  update(weatherFacts: WeatherFacts): void;
}

export type WeatherFacts = {
  temperature: number;
  humidity: number;
}