import {Observer, Subject, WeatherFacts} from "./interfaces";

export class Fan implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    this.subject.registerObserver(this);
  }

  public update(weatherFacts: WeatherFacts):void {
    if(weatherFacts.temperature > 25) {
      console.log('Ventilator: Ich dreh mich mal...');
    } else {
      console.log('Ventilator: Ich halt mal an...');
    }
  }
}