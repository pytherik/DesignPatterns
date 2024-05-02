import {Facts, Observer, Subject} from "./interfaces";
import * as console from "node:console";

export class Critic implements Observer {
  private subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
    this.subject.registerObserver(this)
  }

  update(facts: Facts): void {
    if (facts.text.includes("fuck")) {
      console.log('Kritiker: Ich werde eine vernichtende Kritik schreiben!');
    } else {
      console.log('Kritiker: Ich werde eine wohlwollende Kritik schreiben!');
    }
  }
}