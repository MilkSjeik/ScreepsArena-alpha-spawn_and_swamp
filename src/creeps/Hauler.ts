"use strict";

import BaseCreep from "./BaseCreep";
import { CARRY, MOVE, ERR_NOT_IN_RANGE, RESOURCE_ENERGY } from "game/constants";
import { Structure, StructureSpawn } from "game/prototypes";
import { HAULER, Role } from "../constants";
import SpawnQueue from "../SpawnQueue";
import BaseSquad from "squads/BaseSquad";

class Hauler extends BaseCreep {
  // Private
  #source: Structure | undefined; // TODO: replace with more specific objects
  #target: StructureSpawn | undefined;

  /**
   * Hauler creep: retrieve (mined) energy and haul it to spawn
   * @constructor
   * @param {SpawnQueue} spawnQueue - My spawn location
   * @param {Number} squad - Squad
   * @param {Number} memberId - Member Id
   */
  constructor(spawnQueue: SpawnQueue, squad: BaseSquad, memberId: number) {
    super(squad.id, memberId, Role.HAULER);

    this.body = [CARRY, MOVE];
    this.queueSpawn(spawnQueue, squad);
  }

  // Getters
  get source() {
    return this.#source;
  }
  get target() {
    //console.log("[D] Getting target");
    return this.#target;
  }

  // Setters
  set source(source) {
    this.#source = source;
  }
  set target(target) {
    //console.log("[D] Setting target: " + JSON.stringify(target) + "for creep with id: " + this.creep.id);
    this.#target = target;
    //console.log("[D] Set target: " + JSON.stringify(this.#target) + "for creep with id: " + this.creep.id);
  }

  // Methods
  /**
   * Execute the default action for a hauler creep: haul energy ;)
   */
  run() {
    if (this.creep != undefined) {
      //console.log("[D] Run Hauler - Target: " + JSON.stringify(this.#target) + "for creep with id: " + this.creep.id);
      if (this.#target === undefined) {
        console.log("[E] Energy target not defined for creep " + this.creep.id);
      } else if (this.#source === undefined) {
        console.log("[E] Energy source not defined for creep " + this.creep.id);
        // Verify if this.#source is a type of StructureConstant
      } else if (this.#source instanceof Structure) {
        //console.log("[D] Source: " + JSON.stringify(this.#target));
        if (this.creep.store[RESOURCE_ENERGY] == 0) {
          //console.log("[D] Trying to withdraw some energy");
          if (
            this.creep.withdraw(this.#source, RESOURCE_ENERGY) ==
            ERR_NOT_IN_RANGE
          ) {
            //console.log("[D] Not in range, moving closer!");
            this.creep.moveTo(this.#source);
          }
        } else {
          // on top of container = transfer energy
          //console.log("[D] Transfer energy");
          if (
            this.creep.transfer(this.#target, RESOURCE_ENERGY) ==
            ERR_NOT_IN_RANGE
          ) {
            //console.log("[D] Not in range, moving closer!");
            this.creep.moveTo(this.#target);
          }
        }
      }
    }
  }
}

export default Hauler;
