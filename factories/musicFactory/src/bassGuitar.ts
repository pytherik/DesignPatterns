import {Instrument} from "./instrument";

export class BassGuitar extends Instrument {
  constructor(name: string, material: string, numStrings: number) {
    super(name, material, numStrings);
  }
  play(): void {
      console.log("Playing the bass guitar");
  }
}