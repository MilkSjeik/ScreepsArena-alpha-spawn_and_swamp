'use strict'

import { Creep } from '/game/prototypes';

class BaseCreep {
    body = [];
    creep;
    role;


    constructor(role) {
        this.role = role;
    }

    spawn(spawn) {
        this.creep = spawn.spawnCreep(this.body).object;
    }
}

export default BaseCreep;