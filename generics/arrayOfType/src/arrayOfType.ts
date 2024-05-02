export class ArrayOfType<T> {
  private array: T[] = [];
  static count: number = 0;

  public push(value: T): void {
    this.array.push(value);
    ArrayOfType.count ++;
  }

  public logArray(): void {
    console.log(this.array)
  }
}