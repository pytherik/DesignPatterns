"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemperatureDisplay = void 0;
class TemperatureDisplay {
    constructor(weaterStation) {
        this.subject = weaterStation;
        weaterStation.registerObserver(this);
    }
    update(temperature) {
        console.log('Ich muss mein Display aktualisieren...');
    }
}
exports.TemperatureDisplay = TemperatureDisplay;
