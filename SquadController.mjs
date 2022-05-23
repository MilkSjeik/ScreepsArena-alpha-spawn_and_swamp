'use strict'

import { getObjectsByPrototype } from '/game/utils';
import { StructureSpawn } from '/game/prototypes';
import _ from './utils/lodash-4.17.21-es/lodash'

import Squad from './squads/Squad';

let mySquad;


class SquadController {
    static squadCounter;
    #squads = [];

    constructor() {
    }

    // Getters

    // Setters

    // Create squad
    createSquad(spawnQueue, aMembers) {
        if (!mySquad) {
            mySquad = new Squad(this.squadCounter, aMembers, spawnQueue);
            this.squadCounter++;
            this.#squads.push(mySquad);
        }
    } 

    run(){
        console.log("[D] SquadController.run()");
        this.#squads.forEach(squad => {
            squad.run();
        });
    }

}

export default SquadController;