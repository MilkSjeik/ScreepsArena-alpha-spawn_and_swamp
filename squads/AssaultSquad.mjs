'use strict'

//import { Creep } from '/game/prototypes';
import BaseSquad from './BaseSquad';
import { HAULER } from '/user/constants';
import Hauler from '/user/creeps/Hauler';
import SpawnQueue from '../SpawnQueue'

class AssaultSquad extends BaseSquad {
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
            // TODO:
            // If solder: set target to attack
            // Move together as one squad!
            
        //     else if (myCreep.role == "knight") {
        //         // if enemycreep nearby
        //         const closeTargets = findInRange(myCreep, enemyCreeps, 3);
        //         if(closeTargets.length >= 1) {
        //             // attack first enemy creep
        //             const enemyCreep = closeTargets[0];
        //             if(myCreep.attack(enemyCreep) == ERR_NOT_IN_RANGE) {
        //                 myCreep.moveTo(enemyCreep);
        //             }
        //         }
        //         else {
        //             if(myCreep.attack(enemySpawn) == ERR_NOT_IN_RANGE) {
        //                 // Move to attack enemySpawn
        //                 myCreep.moveTo(enemySpawn);
        //             }
        //         }
        //     }
        
            //if (member.roles)
            if (member.creep) {
                member.target = memory.enemySpawn;

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

export default AssaultSquad;