// ── locations/pusat/index.js ─────────────────────────────────────────────
// Combines all sections for PUSAT
// ────────────────────────────────────────────────────────────────

import pusatF1CastleSection from './pusat-f1-castle.js';
import pusatF1ESportsSection from './pusat-f1-e-sports.js';
import pusatF1IPlayToysSection from './pusat-f1-i-play-toys.js';
import pusatF1KidsSection from './pusat-f1-kids.js';
import pusatF1LobbySection from './pusat-f1-lobby.js';
import pusatF1SensorySection from './pusat-f1-sensory.js';
import pusatF1ReadingSection from './pusat-f1-reading.js';
import pusatOutsideSection from './outside.js';
import pusatF2AuditoriumSection from './pusat-f2-auditorium.js';
import pusatF2IntersectRoomSection from './pusat-f2-intersect-room.js';
import pusatF2MeetingRoomSection from './pusat-f2-meeting-room.js';
import pusatF2ReadingSection from './pusat-f2-reading.js';
import pusatF2StairsSection from './pusat-f2-stairs.js';
import pusatF2TrainingRoomSection from './pusat-f2-training-room.js';
import pusatElevatorSection from './pusat-elevator.js';

export default [
  ...pusatF1CastleSection,
  ...pusatF1ESportsSection,
  ...pusatF1IPlayToysSection,
  ...pusatF1KidsSection,
  ...pusatF1LobbySection,
  ...pusatF1SensorySection,
  ...pusatF1ReadingSection,
  ...pusatOutsideSection,
  ...pusatF2AuditoriumSection,
  ...pusatF2IntersectRoomSection,
  ...pusatF2MeetingRoomSection,
  ...pusatF2ReadingSection,
  ...pusatF2StairsSection,
  ...pusatF2TrainingRoomSection,
  ...pusatElevatorSection,
];
