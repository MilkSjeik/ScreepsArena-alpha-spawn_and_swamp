"use strict";

import { findClosestByRange, getObjectsByPrototype } from "game/utils";
import {
  Creep,
  StructureContainer,
  StructureSpawn,
  GameObject,
} from "game/prototypes";

class GameMemory {
  #mySpawn: StructureSpawn | undefined;
  #enemySpawn: StructureSpawn | undefined;

  myCreeps: Creep[] | undefined;
  enemyCreeps: Creep[] | undefined;

  constructor() {
    // try to find spawns
    const spawns: StructureSpawn[] = getObjectsByPrototype(StructureSpawn);
    this.#mySpawn = spawns.find((struct) => struct.my);
    this.#enemySpawn = spawns.find((struct) => !struct.my);

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
  getCloseContainer(object: GameObject): GameObject | null {
    // Find containers with energy nearby spawn
    const containers = getObjectsByPrototype(StructureContainer).filter(
      // ?. operator checks if container.store is null or undefined, and if it is, the entire expression evaluates to undefined.
      // The ?? operator then provides a default value of 0 in case the result is undefined.
      (container) => container.store?.getUsedCapacity() ?? 0 > 0,
    );

    if (containers.length > 0) {
      console.log("Found containers: " + JSON.stringify(containers));
      return findClosestByRange(object, containers);
    } else {
      return null;
    }
  }

  refresh() {
    // Determine objects:
    const creeps = getObjectsByPrototype(Creep);
    this.myCreeps = creeps.filter((creep) => creep.my);
    this.enemyCreeps = creeps.filter((creep) => !creep.my);
  }
}

export default GameMemory;
