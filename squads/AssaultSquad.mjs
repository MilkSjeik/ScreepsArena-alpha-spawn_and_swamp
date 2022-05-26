'use strict'

//import { Creep } from '/game/prototypes';
import BaseSquad from './BaseSquad';
import { ATTACK } from '/game/constants';
import { GUARD, SOLDIER } from '../constants';
import Hauler from '/user/creeps/Hauler';
import SpawnQueue from '../SpawnQueue'
import _ from '../utils/lodash-4.17.21-es/lodash';

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
        let creepTask;

        console.log("[D] Squad.run()");
        console.log("[D] Squad members: " + JSON.stringify(this.members));

        // Verify if the squad is complete
        // TODO: extend squad check with sniper and healer
        let currentCreeps = memory.myCreeps.filter(creep => creep.squadId == this.id);
        // remove creep when still spawning (position = same as spawn)
        currentCreeps.forEach( creep => {
            if(creep.x == memory.mySpawn.x && creep.y == memory.mySpawn.y) {
                _.pull(currentCreeps, creep);
            }
        });

        if (currentCreeps.length < this.members.length) {
            // if not complete: guard duty!
            creepTask = GUARD;
        }
        else {
            // otherwise attack mode
            creepTask = ATTACK;
        }

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
                if (member.role == SOLDIER) {
                    member.task = creepTask;
                    if (creepTask == GUARD) {
                        member.objective = memory.mySpawn;
                    }
                    else if (creepTask == ATTACK) {
                        member.objective = memory.enemySpawn;
                    }
                }

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