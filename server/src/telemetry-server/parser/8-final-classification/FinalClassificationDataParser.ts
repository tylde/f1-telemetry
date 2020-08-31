import {PacketParser} from '../PacketParser';
import {Parser} from 'binary-parser';

export class FinalClassificationDataParser extends PacketParser {
  constructor() {
    super();

    this.uint8('position');
    this.uint8('numLaps');
    this.uint8('gridPosition');
    this.uint8('points');
    this.uint8('numPitStops');
    this.uint8('resultStatus');
    this.floatle('bestLapTime');
    this.doublele('totalRaceTime');
    this.uint8('penaltiesTime');
    this.uint8('numPenalties');
    this.uint8('numTyreStints');
    this.array('tyreStintsActual', {length: 8, type: new Parser().uint8('')})
    this.array('tyreStintsVisual', {length: 8, type: new Parser().uint8('')})
  }
}
