"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instrument = void 0;
class Instrument {
    constructor(name, material, numStrings) {
        this.name = name;
        this.material = material;
        this.numStrings = numStrings;
    }
    getSpecs() {
        return `Dieses Instrument heißt ${this.name}.
        \nEs besteht aus ${this.material}.
        \nAnzahl Saiten: ${this.numStrings}`;
    }
}
exports.Instrument = Instrument;
