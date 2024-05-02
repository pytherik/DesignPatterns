import {MusicFactory} from "./musicFactory";
import {BassGuitar} from "./bassGuitar";

console.log("it works");


const myInstrument = MusicFactory.create('guitar', 'Strandgitarre', 'Treibholz', 6);
const myOtherInst= MusicFactory.create('bassguitar', 'Bass', 'Walnuss', 5)
myInstrument!.play();
myOtherInst!.play();