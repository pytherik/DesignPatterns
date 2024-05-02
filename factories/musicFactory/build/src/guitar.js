"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guitar = void 0;
const instrument_1 = require("../instrument");
class Guitar extends instrument_1.Instrument {
    constructor(name, material, numStrings) {
        super(name, material, numStrings);
    }
    play() {
        console.log("Pling, pling, pling, shieeeek, shred....");
    }
}
exports.Guitar = Guitar;
