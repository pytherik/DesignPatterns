import {Instrument} from "./instrument";

export class Guitar extends Instrument {
  constructor(name: string, material: string, numStrings: number) {
    super(name, material, numStrings);
  }

  play(): void {
    console.log("Pling, pling, pling, shieeeek, shred....");
  }
}