// ===== 0 HEADER ======================================================================================================

export type PacketHeader = {
  packetFormat: number;
  gameMajorVersion: number;
  gameMinorVersion: number;
  packetVersion: number;
  packetId: number;
  sessionUID: bigint;
  sessionTime: number;
  frameIdentifier: number;
  playerCarIndex: number;
  secondaryPlayerCarIndex: number;
}

// ===== 0 MOTION ======================================================================================================

export type CarMotionData = {
  worldPositionX: number;
  worldPositionY: number;
  worldPositionZ: number;
  worldVelocityX: number;
  worldVelocityY: number;
  worldVelocityZ: number;
  worldForwardDirX: number;
  worldForwardDirY: number;
  worldForwardDirZ: number;
  worldRightDirX: number;
  worldRightDirY: number;
  worldRightDirZ: number;
  gForceLateral: number;
  gForceLongitudinal: number;
  gForceVertical: number;
  yaw: number;
  pitch: number;
  roll: number;
};

export type PacketMotionData = {
  header: PacketHeader;

  carMotionData: CarMotionData[];

  suspensionPosition: number[];
  suspensionVelocity: number[];
  suspensionAcceleration: number[];
  wheelSpeed: number[];
  wheelSlip: number[];
  localVelocityX: number;
  localVelocityY: number;
  localVelocityZ: number;
  angularVelocityX: number;
  angularVelocityY: number;
  angularVelocityZ: number;
  angularAccelerationX: number;
  angularAccelerationY: number;
  angularAccelerationZ: number;
  frontWheelsAngle: number;
};

// ===== 1 SESSION =====================================================================================================

export type MarshalZone = {
  zoneStart: number;
  zoneFlag: number;
};

export type WeatherForecastSample = {
  sessionType: number;
  timeOffset: number;
  weather: number;
  trackTemperature: number;
  airTemperature: number;
};

export type PacketSessionData = {
  header: PacketHeader;
  weather: number;
  trackTemperature: number;
  airTemperature: number;
  totalLaps: number;
  trackLength: number;
  sessionType: number;
  trackId: number;
  formula: number;
  sessionTimeLeft: number;
  sessionDuration: number;
  pitSpeedLimit: number;
  gamePaused: number;
  isSpectating: number;
  spectatorCarIndex: number;
  sliProNativeSupport: number;
  numMarshalZones: number;
  marshalZones: MarshalZone[];
  safetyCarStatus: number;
  networkGame: number;
  numWeatherForecastSamples: number;
  weatherForecastSamples: WeatherForecastSample[];
};

// ===== 2 LAP DATA ====================================================================================================

export type LapData = {
  m_lastLapTime: number;
  m_currentLapTime: number;

  m_sector1TimeInMS: number;
  m_sector2TimeInMS: number;
  m_bestLapTime: number;
  m_bestLapNum: number;
  m_bestLapSector1TimeInMS: number;
  m_bestLapSector2TimeInMS: number;
  m_bestLapSector3TimeInMS: number;
  m_bestOverallSector1TimeInMS: number;
  m_bestOverallSector1LapNum: number;
  m_bestOverallSector2TimeInMS: number;
  m_bestOverallSector2LapNum: number;
  m_bestOverallSector3TimeInMS: number;
  m_bestOverallSector3LapNum: number;

  m_lapDistance: number;
  m_totalDistance: number;
  m_safetyCarDelta: number;
  m_carPosition: number;
  m_currentLapNum: number;
  m_pitStatus: number;
  m_sector: number;
  m_currentLapInvalid: number;
  m_penalties: number;
  m_gridPosition: number;
  m_driverStatus: number;
  m_resultStatus: number;
}

export type PacketLapData = {
  m_header: PacketHeader;

  m_lapData: LapData[];
};

// ===== 3 EVENT =======================================================================================================

export type PacketEventData = {

};

// ===== 4 PARTICIPANTS ================================================================================================

export type ParticipantsData = {
  aiControlled: number;
  driverId: number;
  teamId: number;
  raceNumber: number;
  nationality: number;
  name: string[];
  yourTelemetry: number;
}

export type PacketParticipantsData = {
  header: PacketHeader;
  numActiveCars: number;
  participants: ParticipantsData[];
}

// ===== 5 CAR SETUPS ==================================================================================================

export type CarSetupData = {
  m_frontWing: number;
  m_rearWing: number;
  m_onThrottle: number;
  m_offThrottle: number;
  m_frontCamber: number;
  m_rearCamber: number;
  m_frontToe: number;
  m_rearToe: number;
  m_frontSuspension: number;
  m_rearSuspension: number;
  m_frontAntiRollBar: number;
  m_rearAntiRollBar: number;
  m_frontSuspensionHeight: number;
  m_rearSuspensionHeight: number;
  m_brakePressure: number;
  m_brakeBias: number;
  m_rearLeftTyrePressure: number;
  m_rearRightTyrePressure: number;
  m_frontLeftTyrePressure: number;
  m_frontRightTyrePressure: number;
  m_ballast: number;
  m_fuelLoad: number;
};

export type PacketCarSetupData = {
  m_header: PacketHeader
  m_carSetups: CarSetupData[];
};

// ===== 6 CAR TELEMETRY ===============================================================================================

export type CarTelemetryData = {
  speed: number;
  throttle: number;
  steer: number;
  brake: number;
  clutch: number;
  gear: number;
  engineRPM: number;
  drs: number;
  revLightsPercent: number;
  brakesTemperature: number[];
  tyresSurfaceTemperature: number[];
  tyresInnerTemperature: number[];
  engineTemperature: number;
  tyresPressure: number[];
  surfaceType: number[];
};

export type PacketCarTelemetryData = {
  header: PacketHeader;
  carTelemetryData: CarTelemetryData[];
  buttonStatus: number;
  mfdPanelIndex: number;
  mfdPanelIndexSecondaryPlayer: number;
  suggestedGear: number;
};

// ===== 7 CAR STATUS ==================================================================================================

export type CarStatusData = {
  tractionControl: number;
  antiLockBrakes: number;
  fuelMix: number;
  frontBrakeBias: number;
  pitLimiterStatus: number;
  fuelInTank: number;
  fuelCapacity: number;
  fuelRemainingLaps: number;
  maxRPM: number;
  idleRPM: number;
  maxGears: number;
  drsAllowed: number;
  drsActivationDistance: number;
  tyresWear: number[];
  actualTyreCompound: number;
  visualTyreCompound: number;
  tyresAgeLaps: number;
  tyresDamage: number[];
  frontLeftWingDamage: number;
  frontRightWingDamage: number;
  rearWingDamage: number;
  drsFault: number;
  engineDamage: number;
  gearBoxDamage: number;
  vehicleFiaFlags: number;
  ersStoreEnergy: number;
  ersDeployMode: number;
  ersHarvestedThisLapMGUK: number;
  ersHarvestedThisLapMGUH: number;
  ersDeployedThisLap: number;
};

export type PacketCarStatusData = {
  header: PacketHeader;
  carStatusData: CarStatusData[];
};

// ===== 8 FINAL CLASSIFICATION ========================================================================================

export type FinalClassificationData = {
  m_position: number;
  m_numLaps: number;
  m_gridPosition: number;
  m_points: number;
  m_numPitStops: number;
  m_resultStatus: number;
  m_bestLapTime: number;
  m_totalRaceTime: number;
  m_penaltiesTime: number;
  m_numPenalties: number;
  m_numTyreStints: number;
  m_tyreStintsActual: number[];
  m_tyreStintsVisual: number[];
};

export type  PacketFinalClassificationData = {
  m_header: PacketHeader;
  m_numCars: number;
  m_classificationData: FinalClassificationData[];
};

// ===== 9 LOBBY INFO ==================================================================================================
export enum AIControlled {
  AI,
  HUMAN
}

export enum Team {

}

export enum Nationality {

}

export enum ReadyStatus {
  NOT_READY = 0,
  READY = 1,
  SPECTATING = 2
}

export type LobbyInfoData = {
  m_aiControlled: AIControlled
  m_teamId: Nationality
  m_nationality: Nationality;
  m_name: string[]
  m_readyStatus: ReadyStatus
};

export type PacketLobbyInfoData = {
  m_header: PacketHeader;

  m_numPlayers: number;
  m_lobbyPlayers: LobbyInfoData[] // 22
}

// ======================================================================================================

export type PacketData = PacketHeader
  | CarMotionData
  | PacketSessionData
  | PacketLapData
  | PacketEventData
  | PacketParticipantsData
  | PacketCarSetupData
  | PacketCarTelemetryData
  | PacketCarStatusData
  | PacketFinalClassificationData
  | PacketLobbyInfoData;
