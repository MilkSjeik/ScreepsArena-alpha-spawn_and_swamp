'use strict'

//import { Creep } from '/game/prototypes';
import BaseSquad from './BaseSquad';
import { HAULER } from '/user/constants';
import Hauler from '/user/creeps/Hauler';
import SpawnQueue from '../SpawnQueue'

class Squad extends BaseSquad {
    #id;
    #members = [];
    #lastMemberId = 0;

    /**
     * Creates a squad of creeps
     * @constructor
     * @param {Array} roles - An array of creep roles
     * @param {SpawnQueue} spawnQueue - Squad spawn location
     */
    constructor(id, roles, spawnQueue) {
        super(id, roles, spawnQueue);

        console.log("[D] request received to create a squad with roles: " + JSON.stringify(roles));
        this.#id = id;
        roles.forEach(role => {
            this.#lastMemberId++;

            switch (role) {
                case HAULER:
                    //const hauler = new Hauler(spawnQueue, this.#id, this.#lastMemberId);
                    const hauler = new Hauler(spawnQueue, this, this.#lastMemberId);
                    this.#members.push(hauler);
                    break;
            }
        });
    }

    // Methods
    /**
     * TODO
     */
    run(memory) {
        console.log("[D] Squad.run()");
        console.log("[D] Squad members: " + JSON.stringify(this.#members));

        // Verify if the squad is complete
        // If not, spawn member

        // Time for action
        // for each member in the squad
        this.#members.forEach(member => {
            console.log("[D] Found member: " + JSON.stringify(member));
            // TODO: If hauler: set target to retrieve energy
            //if (member.roles)
            if (member.creep) {
                const container = memory.getCloseContainer(member.creep);
                console.log("[D] Setting container as source: " + JSON.stringify(container));
                member.source = container;
                console.log("[D] Set container as source: " + JSON.stringify(member.source));
                member.target = memory.mySpawn;

                member.run();
            }
        });

        // Spawn hauler
        // if(!myHauler) {
        //     myHauler = new Hauler(myMemory.mySpawn);
        // }
        // else {
        //     console.log('[D] Hauler body: ' + JSON.stringify(myHauler.body));
        //     console.log('[D] Hauler creep: ' + JSON.stringify(myHauler.creep));
        //     myHauler.targetContainer = closeContainer;
        //     myHauler.run();
        // }
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

        this.#members[memberId - 1].creep = creep;
    }
}

export default Squad;