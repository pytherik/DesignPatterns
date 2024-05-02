import {USBToUSBCAdapter} from "./USBToUSBCAdapter";
import {Headset} from "./headset";

const adapter = new USBToUSBCAdapter(new Headset());

console.log(adapter.useUSBCPort());
