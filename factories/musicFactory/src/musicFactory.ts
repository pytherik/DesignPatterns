import {Guitar} from "./guitar";
import {BassGuitar} from "./bassGuitar";

export class MusicFactory {
  static create(type: string, name: string,
                material: string, numStrings: number) {
    switch (type.toLowerCase()) {
      case "guitar":
        return new Guitar(name, material, numStrings);
      case "bassguitar":
        return new BassGuitar(name, material, numStrings);
    }
  }
}