import {Observer, Subject, WeatherFacts} from "./interfaces";
import * as console from "node:console";

export class TemperatureDisplay implements Observer{
  private subject: Subject;

  constructor(weaterStation: Subject) {
    this.subject = weaterStation;
    weaterStation.registerObserver(this);
  }

  public update(weatherFacts: WeatherFacts): void {
    if(weatherFacts.temperature > 25) {
      console.log('Ganz schön warm geworden...')
    } else if(weatherFacts.temperature < 18) {
      console.log('Scheißkalt geworden...');
    } else {
      console.log('Sehr angenehme Temperatur...')
    }
  }
}