'use strict'

import { getObjectsByPrototype } from '/game/utils';
import { StructureSpawn } from '/game/prototypes';
import _ from './utils/lodash-4.17.21-es/lodash'

import Squad from './Squad.mjs';
import { HAULER } from '/user/constants';

let mySquad;


class SquadController {
    static squadCounter;
    #squads = [];

    constructor() {
    }

    // Getters

    // Setters

    // Create first squad
    createSquad(spawnQueue) {
        if (!mySquad) {
            mySquad = new Squad(this.squadCounter, [HAULER,HAULER], spawnQueue);
            this.squadCounter++;
            this.#squads.push(mySquad);
        }
    } 

    run(){
        mySquad.run();
    }
    

}

export default SquadController;