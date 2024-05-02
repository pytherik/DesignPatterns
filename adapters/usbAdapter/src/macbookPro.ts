import {iMacbookPro} from "./interfaces";

export class MacbookPro implements  iMacbookPro{
    useUSBCPort(): string {
      return 'Using USBC port';
    }
}