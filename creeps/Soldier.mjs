'use strict'


import { ATTACK, MOVE, ERR_NOT_IN_RANGE, RESOURCE_ENERGY } from '/game/constants';
import { getRange } from '/game/utils';
import BaseCreep from './BaseCreep';
import { GUARD, SOLDIER } from '../constants';
import SpawnQueue from '../SpawnQueue.mjs'

class Soldier extends BaseCreep {
    // Private
    objective;
    task;

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

    // Methods
    /**
     * Execute the default action for a solder creep: attack
     */
    run() {
        if (!this.task) {
            console.log("[D] Soldier reporting for duty Sir!");
        }
        else {
            if (this.task == GUARD) {
                console.log("[D] Soldier guarding our spawn.");
                // If not in (close) range, move to objective
                if (getRange(this.creep, this.objective) > 5) {
                    this.creep.moveTo(this.objective);
                }
            }
            else if (this.task == ATTACK) {
                console.log("[D] Soldier attacking the enemy.");
                if (this.creep.attack(this.objective) == ERR_NOT_IN_RANGE) {
                    this.creep.moveTo(this.objective);
                }
            }
        }
    }
}

export default Soldier;