import exp from 'constants';

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
  m_zoneStart: number;
  m_zoneFlag: number;
};

export type WeatherForecastSample = {
  m_sessionType: number;
  m_timeOffset: number;
  m_weather: number;
  m_trackTemperature: number;
  m_airTemperature: number;
};

export type PacketSessionData = {
  m_header: PacketHeader;
  m_weather: number;
  m_trackTemperature: number;
  m_airTemperature: number;
  m_totalLaps: number;
  m_trackLength: number;
  m_sessionType: number;
  m_trackId: number;
  m_formula: number;
  m_sessionTimeLeft: number;
  m_sessionDuration: number;
  m_pitSpeedLimit: number;
  m_gamePaused: number;
  m_isSpectating: number;
  m_spectatorCarIndex: number;
  m_sliProNativeSupport: number;
  m_numMarshalZones: number;
  m_marshalZones: MarshalZone[];
  m_safetyCarStatus: number;
  m_networkGame: number;
  m_numWeatherForecastSamples: number;
  m_weatherForecastSamples: WeatherForecastSample[];
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

// ===== 4 PARTICIPANTS ================================================================================================

export type ParticipantsData = {
  m_aiControlled: number;
  m_driverId: number;
  m_teamId: number;
  m_raceNumber: number;
  m_nationality: number;
  m_name: string[];
  m_yourTelemetry: number;
}

export type PacketParticipantsData = {
  m_header: PacketHeader;
  m_numActiveCars: number;
  m_participants: ParticipantsData[];
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
  m_tractionControl: number;
  m_antiLockBrakes: number;
  m_fuelMix: number;
  m_frontBrakeBias: number;
  m_pitLimiterStatus: number;
  m_fuelInTank: number;
  m_fuelCapacity: number;
  m_fuelRemainingLaps: number;
  m_maxRPM: number;
  m_idleRPM: number;
  m_maxGears: number;
  m_drsAllowed: number;
  m_drsActivationDistance: number;
  m_tyresWear: number[];
  m_actualTyreCompound: number;
  m_visualTyreCompound: number;
  m_tyresAgeLaps: number;
  m_tyresDamage: number[];
  m_frontLeftWingDamage: number;
  m_frontRightWingDamage: number;
  m_rearWingDamage: number;
  m_drsFault: number;
  m_engineDamage: number;
  m_gearBoxDamage: number;
  m_vehicleFiaFlags: number;
  m_ersStoreEnergy: number;
  m_ersDeployMode: number;
  m_ersHarvestedThisLapMGUK: number;
  m_ersHarvestedThisLapMGUH: number;
  m_ersDeployedThisLap: number;
};

export type PacketCarStatusData = {
  m_header: PacketHeader;
  m_carStatusData: CarStatusData[];
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
