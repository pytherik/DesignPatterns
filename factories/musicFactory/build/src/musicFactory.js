"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicFactory = void 0;
const guitar_1 = require("./guitar");
class MusicFactory {
    static create(type, name, material, numStrings) {
        switch (type.toLowerCase()) {
            case "guitar":
                return new guitar_1.Guitar(name, material, numStrings);
        }
    }
}
exports.MusicFactory = MusicFactory;
