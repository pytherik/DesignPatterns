"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fan = void 0;
class Fan {
    constructor(weatherStation) {
        this.subject = weatherStation;
        this.subject.registerObserver(this);
    }
    update(temperature) {
        if (temperature > 25) {
            console.log('Ich muss mich selbst einschalten...');
        }
        else {
            console.log('Ich muss mich selbst ausschalten...');
        }
    }
}
exports.Fan = Fan;
