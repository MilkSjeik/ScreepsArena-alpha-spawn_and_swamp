'use strict'

//import { Creep } from '/game/prototypes';
import { HAULER, SOLDIER, SNIPER, HEALER } from '../constants.mjs';
import Hauler from '/user/creeps/Hauler';
import SpawnQueue from '../SpawnQueue'

class BaseSquad {
    id;
    members = [];
    lastMemberId = 0;

    /**
     * Creates a squad of creeps
     * @constructor
     * @param {Array} roles - An array of creep roles
     * @param {SpawnQueue} spawnQueue - Squad spawn location
     */
    constructor(id, roles, spawnQueue) {
        console.log("[D] request received to create a squad with roles: " + JSON.stringify(roles));
        this.id = id;
        roles.forEach(role => {
            this.lastMemberId++;

            switch(role) {
                case HAULER:
                    const hauler = new Hauler(spawnQueue, this, this.lastMemberId);
                    this.members.push(hauler);
                    break;
                case SOLDIER:
                    break;
                case SNIPER:
                    break;
                case HEALER:
                    break;
            }
        });
    }

    // Methods
    /**
     * TODO
     */
     run() {
        console.log("[W] Implement run() in the child class!");
     }

     #isSquadComplete() {
        // TODO
     }

     #spawnMember() {
         // TODO
     }

     updateMember(memberId, creep){
         console.log("[D] Squad.updateMember()");
         console.log("[D]  - memberId: " + memberId);
         console.log("[D]  - creep: " + creep);

         this.members[memberId-1].creep = creep;
     }
}

export default BaseSquad;