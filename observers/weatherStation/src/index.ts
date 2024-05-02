import {WeaterStation} from "./weaterStation";
import {TemperatureDisplay} from "./temperatureDisplay";
import {Fan} from "./fan";
import {Heating} from "./heating";
import {Umbrella} from "./umbrella";

const weatherStation: WeaterStation = new WeaterStation();

const tempDisplay: TemperatureDisplay = new TemperatureDisplay(weatherStation);
const fan: Fan = new Fan(weatherStation);
const heating: Heating = new Heating(weatherStation);
const umbrella: Umbrella = new Umbrella(weatherStation);

weatherStation.setTemperature(23);
weatherStation.setTemperature(30);
weatherStation.setTemperature(14);
weatherStation.setHumidity(93);