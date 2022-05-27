'use strict'

import { ATTACK } from '/game/constants';
import { findPath, getDirection  } from '/game/utils';
import _ from '../utils/lodash-4.17.21-es/lodash';
import BaseSquad from './BaseSquad';
import { GUARD, SOLDIER } from '../constants';
import SpawnQueue from '../SpawnQueue'


class AssaultSquad extends BaseSquad {
    squadPosition;
    squadObjective;

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
        let direction;

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
            this.squadObjective = memory.mySpawn;
        }
        else {
            // otherwise attack mode
            creepTask = ATTACK;
            // TODO: verify if an enemy creep is in range
            this.squadObjective = memory.enemySpawn;
        }

        // Determine direction
        console.log("[D] First member in squad: " + JSON.stringify(this.members[0].creep));
        if (this.members[0].creep) {
            let path = findPath(this.members[0].creep, this.squadObjective);
            // findPath returns array of coordinates...
            if (path.length > 0) {
                direction = getDirection(path[0].x - this.members[0].creep.x, path[0].y - this.members[0].creep.y);
            }

            console.log("[D] Trying to move into direction: " + JSON.stringify(direction));
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
                    member.objective = this.squadObjective;
                    member.moveDirection = direction;
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