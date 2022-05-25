'use strict'

import BaseSquad from './BaseSquad';
import SpawnQueue from '../SpawnQueue'

class Squad extends BaseSquad {
    /**
     * Creates a squad of creeps
     * @constructor
     * @param {Array} roles - An array of creep roles
     * @param {SpawnQueue} spawnQueue - Squad spawn location
     */
    constructor(id, roles, spawnQueue) {
        super(id, roles, spawnQueue);
    }

    // Methods
    /**
     * TODO
     */
    run(memory) {
        console.log("[D] Squad.run()");
        console.log("[D] Squad members: " + JSON.stringify(this.members));

        // Verify if the squad is complete
        // If not, spawn member

        // Time for action
        // for each member in the squad
        this.members.forEach(member => {
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
    }

    #isSquadComplete() {
        // TODO
    }

    #spawnMember() {
        // TODO
    }
}

export default Squad;