'use strict'

import { Creep } from '/game/prototypes';
import SpawnQueue from '../SpawnQueue.mjs'

class BaseCreep {
    squadId;
    memberId;
    role;
    body = [];
    creep;

    constructor(squadId, memberId, role) {
        this.squadId = squadId;
        this.memberId = memberId;
        this.role = role;
    }

    spawn(spawn) {
        this.creep = spawn.spawnCreep(this.body).object;
    }

    queueSpawn(spawnQueue, squad) {
        spawnQueue.add(squad, this.memberId, this.role, this.body);
    }
}

export default BaseCreep;