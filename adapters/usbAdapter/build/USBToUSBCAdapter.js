"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USBToUSBCAdapter = void 0;
class USBToUSBCAdapter {
    constructor(device) {
        this.device = device;
    }
    useUSBCPort() {
        this.device.useUSBPort();
        return 'Using USB port';
    }
}
exports.USBToUSBCAdapter = USBToUSBCAdapter;
