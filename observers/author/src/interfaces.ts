export interface Observer {
  update(facts: Facts): void;
}

export interface Subject {
  registerObserver(o: Observer): void;
  notifyObserver(): void;
}

export type Facts = {
  text: string;
};