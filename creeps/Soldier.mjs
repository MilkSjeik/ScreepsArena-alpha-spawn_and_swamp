'use strict'

import BaseCreep from './BaseCreep';
import { ATTACK, MOVE, ERR_NOT_IN_RANGE, RESOURCE_ENERGY } from '/game/constants';
import { SOLDIER } from '../constants';
import SpawnQueue from '../SpawnQueue.mjs'

class Soldier extends BaseCreep {
    // Private
    #target;

    /**
     * Soldier creep: close combat
     * @constructor
     * @param {SpawnQueue} spawnQueue - My spawn location
     * @param {Number} squad - Squad
     * @param {Number} memberId - Member Id
     */
    constructor(spawnQueue, squad, memberId) {
        super(squad.squadId, memberId, SOLDIER);

        this.body = [ATTACK, ATTACK, MOVE, MOVE];
        this.queueSpawn(spawnQueue, squad);
    }

    // Getters
    get target() {
        return this.#target;
    }

    // Setters
    set target(target) {
        this.#target = target;
    }

    // Methods
    /**
     * Execute the default action for a solder creep: attack
     */
    run() {
        if (!this.#target) {
            console.log("[D] Soldier reporting for duty Sir!");
        }
        else {
            if (this.creep.attack(this.#target) == ERR_NOT_IN_RANGE) {
                this.creep.moveTo(this.#target);
            }
        }
    }
}

export default Soldier;