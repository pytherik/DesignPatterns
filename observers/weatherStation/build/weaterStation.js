"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaterStation = void 0;
class WeaterStation {
    constructor() {
        this.temperature = 0;
        this.observers = [];
    }
    set Temperature(temp) {
        console.log('Wetterstation: neue Temperaturmessung: ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    }
    registerObserver(o) {
        this.observers.push(o);
    }
    removeObserver(o) {
        const index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }
    notifyObservers() {
        this.observers.forEach(observer => {
            observer.update(this.temperature);
        });
    }
}
exports.WeaterStation = WeaterStation;
