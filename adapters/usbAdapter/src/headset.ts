import {iHeadset} from "./interfaces";

export class Headset implements iHeadset {
  useUSBPort(): string {
    return 'Using USB port';
  }
}