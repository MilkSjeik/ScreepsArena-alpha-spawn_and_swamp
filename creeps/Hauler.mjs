'use strict'

import BaseCreep from '/user/creeps/BaseCreep';
import { CARRY, MOVE, ERR_NOT_IN_RANGE, RESOURCE_ENERGY } from '/game/constants';
import { HAULER } from '/user/constants';

class Hauler extends BaseCreep {
    // Private
    #targetContainer;
    #mySpawn;

    /**
     * Hauler creep: retrieve (mined) energy and haul it to spawn
     * @constructor
     * @param {StructureSpawn} spawn - My spawn location
     */
    constructor(spawn) {
        super(HAULER);
        this.body = [CARRY,MOVE];
        this.#mySpawn = spawn;
        this.spawn(spawn);
    }

    // Getters
    get targetContainer() {
        return this.#targetContainer;
    }

    // Setters
    set targetContainer(container) {
        this.#targetContainer = container;
    }

    // Methods
    /**
     * Execute the default action for a hauler creep: haul energy ;)
     */
    run() {
        if(!this.#mySpawn) {
            console.log("[E] Spawn not defined for creep " + this.creep.id);
        }
        else if (!this.targetContainer) {
            console.log("[E] Target container not defined for creep " + this.creep.id);
        }
        else {
            console.log("[D] Target container: " + JSON.stringify(this.targetContainer));
            if(this.creep.store[RESOURCE_ENERGY] == 0) {
                if (this.creep.withdraw(this.targetContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    this.creep.moveTo(this.targetContainer);
                }
            }
            else { // on top of container = transfer energy
                if(this.creep.transfer(this.#mySpawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    this.creep.moveTo(this.#mySpawn);
                }
            }
        }
    }
}

export default Hauler;