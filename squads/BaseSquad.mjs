'use strict'

//import { Creep } from '/game/prototypes';
import { HAULER, SOLDIER, SNIPER, HEALER } from '../constants.mjs';
import Hauler from '../creeps/Hauler';
import Soldier from '../creeps/Soldier';
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
            let member;
            this.lastMemberId++;

            switch (role) {
                case HAULER:
                    member = new Hauler(spawnQueue, this, this.lastMemberId);
                    break;
                case SOLDIER:
                    member = new Soldier(spawnQueue, this, this.lastMemberId);
                    break;
                case SNIPER:
                    break;
                case HEALER:
                    break;
            }

            if (member) {
                this.members.push(member);
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

    updateMember(memberId, creep) {
        console.log("[D] Squad.updateMember()");
        console.log("[D]  - memberId: " + memberId);
        console.log("[D]  - creep: " + creep);

        this.members[memberId - 1].creep = creep;
    }
}

export default BaseSquad;