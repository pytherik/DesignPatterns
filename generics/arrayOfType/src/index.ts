import {ArrayOfType} from "./arrayOfType";

const arrString:ArrayOfType<string> = new ArrayOfType();

arrString.push('a');
arrString.logArray();

const arrNumber: ArrayOfType<number> = new ArrayOfType();

arrNumber.push(1);
arrNumber.logArray();

console.log(ArrayOfType.count)