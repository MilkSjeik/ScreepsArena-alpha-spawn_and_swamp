"use strict";

// Squad types
const ASSAULT = "assault";
const MINING = "mining";

export { ASSAULT, MINING };

enum SquadType {
  ASSAULT = "assault",
  MINING = "mining",
}

export { SquadType };

// Creep roles
const HAULER = "hauler";
const MINER = "miner";
const SOLDIER = "soldier";
const SNIPER = "sniper";
const HEALER = "healer";

export { HAULER, MINER, SOLDIER, SNIPER, HEALER };

enum Role {
  HAULER = "hauler",
  MINER = "miner",
  SOLDIER = "soldier",
  SNIPER = "sniper",
  HEALER = "healer",
}

export { Role };

// Creep tasks
// TODO: attack removed, (ab)using Screeps ATTACK constant
enum SoldierTask {
  GUARD = "GUARD",
  DEFENSIVE = "DEFENSIVE",
  OFFENSIVE = "OFFENSIVE",
}

export { SoldierTask };
