import {PacketParser} from '../PacketParser';
import {Parser} from 'binary-parser';

export class CarTelemetryDataParser extends PacketParser {
  constructor()  {
    super();

    this.uint16le('speed');
    this.floatle('throttle');
    this.floatle('steer');
    this.floatle('brake');
    this.uint8('clutch');
    this.int8('gear');
    this.uint16le('engineRPM');
    this.uint8('drs');
    this.uint8('revLightsPercent');
    this.array('brakesTemperature', {length: 4, type: new Parser().uint16le('')});
    this.array('tyresSurfaceTemperature', {length: 4, type: new Parser().uint8('')});
    this.array('tyresInnerTemperature', {length: 4, type: new Parser().uint8('')});
    this.uint16le('engineTemperature');
    this.array('tyresPressure', {length: 4, type: new Parser().floatle('')});
    this.array('surfaceType', {length: 4, type: new Parser().uint8('')});
  }
}
