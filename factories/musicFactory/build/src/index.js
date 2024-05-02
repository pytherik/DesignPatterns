"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const musicFactory_1 = require("./musicFactory");
console.log("it works");
let myInstrument;
try {
    myInstrument = musicFactory_1.MusicFactory.create('guitar', 'Strandgitarre', 'Treibholz', 6);
}
catch (error) {
    console.log(error);
}
if (myInstrument) {
    myInstrument.play();
}
