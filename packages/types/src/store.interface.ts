import {
  PacketCarSetupData, PacketCarStatusData, PacketCarTelemetryData, PacketEventData, PacketFinalClassificationData,
  PacketLapData, PacketLobbyInfoData,
  PacketMotionData,
  PacketParticipantsData,
  PacketSessionData
} from './packet.interface';

export interface IStore {
  motionPacket: PacketMotionData | null;
  sessionPacket: PacketSessionData | null;
  lapDataPacket: PacketLapData | null;
  eventPacket: PacketEventData | null;
  participantsPacket: PacketParticipantsData | null;
  carSetupsPacket: PacketCarSetupData | null;
  carTelemetryPacket: PacketCarTelemetryData | null;
  carStatusPacket: PacketCarStatusData | null;
  finalClassificationPacket: PacketFinalClassificationData | null;
  lobbyInfoPacket: PacketLobbyInfoData | null;
}
