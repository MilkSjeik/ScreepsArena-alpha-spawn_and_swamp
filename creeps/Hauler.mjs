'use strict'

import BaseCreep from '/user/creeps/BaseCreep';
import { CARRY, MOVE, ERR_NOT_IN_RANGE, RESOURCE_ENERGY } from '/game/constants';

class Hauler extends BaseCreep {
    // Private
    #targetContainer;
    #mySpawn;

    constructor(spawn) {
        super('hauler');
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

    run() {
        console.log("Target container: " + JSON.stringify(this.targetContainer));
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

export default Hauler;