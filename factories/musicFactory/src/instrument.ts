export abstract class Instrument {
  protected name: string;
  protected material: string;
  protected numStrings: number;

  protected constructor(name: string, material: string, numStrings: number) {
    this.name = name;
    this.material = material;
    this.numStrings = numStrings;
  }

  abstract play(): void

  getSpecs(): string {
    return `Dieses Instrument heißt ${this.name}.
        \nEs besteht aus ${this.material}.
        \nAnzahl Saiten: ${this.numStrings}`;
  }
}