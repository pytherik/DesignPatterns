import {Observer, Subject, WeatherFacts} from "./interfaces";

export class Heating implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  public update(weatherFacts: WeatherFacts): void {
    if(weatherFacts.temperature > 18) {
      console.log('Heizung: Ich schalt mich mal aus...')
    }  else {
      console.log('Heizung: Ich schalt mich mal an...')
    }
  }
}