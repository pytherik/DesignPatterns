import {Observer, Subject, Facts} from "./interfaces";

export class Author implements Subject{
  private readonly facts: Facts;
  private observers: Observer[] = [];

  constructor() {
    this.facts = {text: ''};
  }

  setText(text: string): void {
    this.facts.text = text;
    this.notifyObserver();
  }

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyObserver(): void {
    this.observers.forEach(observer => {
      observer.update(this.facts);
    })
  }
}