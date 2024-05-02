"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const USBToUSBCAdapter_1 = require("./USBToUSBCAdapter");
const headset_1 = require("./headset");
const adapter = new USBToUSBCAdapter_1.USBToUSBCAdapter(new headset_1.Headset());
console.log(adapter.useUSBCPort());
