'use strict'

import { findClosestByRange, getObjectsByPrototype } from '/game/utils';
import { Creep, StructureContainer, StructureSpawn } from '/game/prototypes';

class GameMemory {
    #mySpawn;
    #enemySpawn;

    myCreeps;
    enemyCreeps;
    
    constructor() {
        // try to find spawns
        const spawns = getObjectsByPrototype(StructureSpawn);
        this.#mySpawn = spawns.find(struct => struct.my);
        this.#enemySpawn = spawns.find(struct => !struct.my);

        this.refresh();
    }

    // Getters
    get mySpawn() {
        return this.#mySpawn;
    }

    get enemySpawn() {
        return this.#enemySpawn;
    }

    // Setters
    set mySpawn(spawn) {
        this.#mySpawn = spawn;
    }

    set enemySpawn(spawn) {
        this.#enemySpawn = spawn;
    }

    // Public methods
    getCloseContainer(object) {
        // Find containers with energy nearby spawn
        const containers = getObjectsByPrototype(StructureContainer).filter(container => container.store.getUsedCapacity() > 0);
        //console.log("Found containers: " + JSON.stringify(containers));
        return findClosestByRange(object, containers);
    }

    refresh() {
        // Determine objects:
        const creeps = getObjectsByPrototype(Creep);
        this.myCreeps = creeps.filter(creep => creep.my);
        this.enemyCreeps = creeps.filter(creep => !creep.my);
    }
}

export default GameMemory;