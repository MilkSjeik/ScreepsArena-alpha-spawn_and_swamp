'use strict'

import { findClosestByRange, getObjectsByPrototype } from '/game/utils';
import { Creep, StructureContainer, StructureSpawn } from '/game/prototypes';

class gameMemory {

    #mySpawn;
    #enemySpawn;
    
    constructor() {
        // try to find spawns
        const spawns = getObjectsByPrototype(StructureSpawn);
        this.#mySpawn = spawns.find(struct => struct.my);
        this.#enemySpawn = spawns.find(struct => !struct.my);
    }

    // Getters
    get mySpawn() {
        return this.#mySpawn;
    }

    get enemySpawn() {
        return this.#mySpawn;
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
        // Find containers nearby spawn
        const containers = getObjectsByPrototype(StructureContainer);
        const closeContainers = findClosestByRange(object, containers);

        return closeContainers[0];
    }
}

export default gameMemory;