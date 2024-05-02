import {Facts, Observer, Subject} from "./interfaces";
import * as console from "node:console";

export class Reader implements Observer{
  private subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
    this.subject.registerObserver(this);
  }
  update(facts: Facts) {
    if (facts.text.includes("fuck")) {
      console.log('Leser: Geiles Buch!');
    } else {
      console.log('Leser: Langweilig!')
    }
  }
}

