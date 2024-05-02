import {Observer, Subject, WeatherFacts} from "./interfaces";
import * as console from "node:console";

export class Umbrella implements Observer{
  private subject: Subject;
  
  constructor(weatherStation: Subject){
    this.subject = weatherStation;
    this.subject.registerObserver(this);
  }

  public update(weatherFacts: WeatherFacts): void {
      if(weatherFacts.humidity > 90) {
        console.log("Regenschirm: Es regnet wahrscheinlich. Nimm mich mit.");
      } else {
        console.log('Regenschirm: Regnen wirds nicht, lass mich zu Hause.')
      }
  }
}