import {iHeadset, iMacbookPro} from "./interfaces";

export class USBToUSBCAdapter implements iMacbookPro{
  private device: iHeadset;

  constructor(device: iHeadset) {
    this.device = device;
  }

  useUSBCPort(): string {
    this.device.useUSBPort();
    return 'Using USB port';
  }
}