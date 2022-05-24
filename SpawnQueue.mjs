'use strict'

import { getObjectsByPrototype } from '/game/utils';
import { StructureSpawn } from '/game/prototypes';
import SquadController from './SquadController.mjs';
import _ from './utils/lodash-4.17.21-es/lodash'

class SpawnQueue {
    #mySpawn;
    #queue = [];

    constructor(spawn) {
        // try to find spawns
        this.#mySpawn = spawn;
    }

    // Getters
    get mySpawn() {
        return this.#mySpawn;
    }

    // Setters
    set mySpawn(spawn) {
        this.#mySpawn = spawn;
    }

    // Private methods
    spawn() {
        console.log("[D] SpawnQueue - Current spawn queue: " + JSON.stringify(this.#queue));
        // Check if something is in queue
        if (this.#queue.length > 0) {
            const firstInQueue = this.#queue[0];
            // if yes: try to spawn
            const creep = this.mySpawn.spawnCreep(firstInQueue.body).object;
            // check result:
            if (creep === undefined) {
                // undefined = already busy
            }
            else { // emtpy object = spawning creep
                // set creep properties
                creep.squad = firstInQueue.squad;
                creep.memberId = firstInQueue.memberId;
                creep.role = firstInQueue.role;

                // remove first from queue
                this.#queue = _.drop(this.#queue);

                // add creep to squad
                creep.squad.updateMember(creep.memberId, creep);
                //firstInQueue.squad.updateMember(creep.memberId, creep);
            }
        }

    }

    // Public methods
    add(squad, memberId, role, body) {
        this.#queue.push({
            "squad": squad,
            "memberId": memberId,
            "role": role,
            "body": body
        });
    }

    remove() {

    }
}

export default SpawnQueue;