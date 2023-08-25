"use strict";

import { Creep, StructureSpawn } from "game/prototypes";
import SpawnQueue from "../SpawnQueue.mjs";

class BaseCreep {
  squadId;
  memberId;
  role;
  body = [];
  creep: Creep | undefined;

  constructor(squadId, memberId, role) {
    this.squadId = squadId;
    this.memberId = memberId;
    this.role = role;
  }

  spawn(spawn: StructureSpawn) {
    this.creep = spawn.spawnCreep(this.body).object;
  }

  queueSpawn(spawnQueue, squad) {
    spawnQueue.add(squad, this.memberId, this.role, this.body);
  }
}

export default BaseCreep;
