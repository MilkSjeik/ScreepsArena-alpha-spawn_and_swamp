'use strict'

import BaseCreep from './BaseCreep';
import { ATTACK, MOVE, ERR_NOT_IN_RANGE, RESOURCE_ENERGY } from '/game/constants';
import { SOLDIER } from '../constants';
import SpawnQueue from '../SpawnQueue.mjs'

class Soldier extends BaseCreep {
    // Private
    // TODO: cleanup
    #source;
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

    // TODO: review
    // Getters
    get source() {
        return this.#source;
    }
    get target() {
        console.log("[D] Getting target");
        return this.#target;
    }

    // Setters
    set source(source) {
        this.#source = source;
    }
    set target(target) {
        console.log("[D] Setting target: " + JSON.stringify(target) + "for creep with id: " + this.creep.id);
        this.#target = target;
        console.log("[D] Set target: " + JSON.stringify(this.#target) + "for creep with id: " + this.creep.id);
    }

    // Methods
    /**
     * Execute the default action for a hauler creep: haul energy ;)
     */
    run() {
        // TODO: implement
    //     else if (myCreep.role == "knight") {
    //         // if enemycreep nearby
    //         const closeTargets = findInRange(myCreep, enemyCreeps, 3);
    //         if(closeTargets.length >= 1) {
    //             // attack first enemy creep
    //             const enemyCreep = closeTargets[0];
    //             if(myCreep.attack(enemyCreep) == ERR_NOT_IN_RANGE) {
    //                 myCreep.moveTo(enemyCreep);
    //             }
    //         }
    //         else {
    //             if(myCreep.attack(enemySpawn) == ERR_NOT_IN_RANGE) {
    //                 // Move to attack enemySpawn
    //                 myCreep.moveTo(enemySpawn);
    //             }
    //         }
    //     }
    }
}

export default Soldier;