"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayOfType = void 0;
class ArrayOfType {
    constructor() {
        this.array = [];
    }
    push(value) {
        this.array.push(value);
    }
    logArray() {
        console.log(this.array);
    }
}
exports.ArrayOfType = ArrayOfType;
