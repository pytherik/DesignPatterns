"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const weaterStation_1 = require("./weaterStation");
const temperatureDisplay_1 = require("./temperatureDisplay");
const fan_1 = require("./fan");
const weatherStation = new weaterStation_1.WeaterStation();
const tempDisplay = new temperatureDisplay_1.TemperatureDisplay(weatherStation);
const fan = new fan_1.Fan(weatherStation);
tempDisplay.update(27);
