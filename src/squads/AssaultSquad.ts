"use strict";

import { ATTACK } from "game/constants";
import { findPath, getDirection } from "game/utils";
// import { Visual } from "game/visual";
// import _ from "../utils/lodash-4.17.21-es/lodash";
import BaseSquad from "./BaseSquad";
// import { GUARD, SOLDIER } from "../constants";
import SpawnQueue from "../SpawnQueue";
import GameMemory from "../GameMemory";

class AssaultSquad extends BaseSquad {
  // position;
  // objective;
  //
  // /**
  //  * Creates a squad of creeps
  //  * @constructor
  //  * @param {Array} roles - An array of creep roles
  //  * @param {SpawnQueue} spawnQueue - Squad spawn location
  //  */
  // constructor(id, roles, spawnQueue) {
  //   super(id, roles, spawnQueue);
  //
  //   this.inFormation = true;
  // }
  //
  // // Methods
  // /**
  //  * TODO
  //  */
  // run(memory: GameMemory) {
  //   let creepTask;
  //   let direction;
  //
  //   console.log("[D] AssaultSquad.run()");
  //   console.log("[D] AssaultSquad members: " + JSON.stringify(this.members));
  //
  //   // Verify if the squad is complete
  //   // TODO: extend squad check with sniper and healer
  //   let currentCreeps = memory.myCreeps.filter(
  //     (creep) => creep.squadId == this.id,
  //   );
  //   // remove creep when still spawning (position = same as spawn)
  //   currentCreeps.forEach((creep) => {
  //     if (creep.x == memory.mySpawn.x && creep.y == memory.mySpawn.y) {
  //       _.pull(currentCreeps, creep);
  //     }
  //   });
  //
  //   if (currentCreeps.length < this.members.length) {
  //     // if not complete: guard duty!
  //     creepTask = GUARD;
  //     // Station squad right of spawn
  //     this.objective = { x: memory.mySpawn.x + 2, y: memory.mySpawn.y - 1 };
  //     // Move squad to spawn x+2, y-1
  //     this.position = this.objective;
  //   } else {
  //     // otherwise attack mode
  //     creepTask = ATTACK;
  //     // TODO: verify if an enemy creep is in range
  //     this.objective = memory.enemySpawn;
  //   }
  //
  //   // Time for action
  //   // for each member in the squad
  //   this.members.forEach((member) => {
  //     console.log("[D] Found member: " + JSON.stringify(member));
  //     // TODO:
  //     // If solder: set target to attack
  //     // Move together as one squad!
  //
  //     //if (member.roles)
  //     if (member.creep) {
  //       // Do we need to move in formation?
  //       if (this.inFormation) {
  //         // TODO: Verify if we are already in formation
  //         // If not, move into formation
  //         if (member.memberId === 0) {
  //           // leader of the pack
  //           // Determine direction
  //           console.log(
  //             "[D] First member in squad: " + JSON.stringify(member.creep),
  //           );
  //           //let path = findPath(this.members[0].creep, this.objective);
  //           let path = findPath(member.creep, this.objective);
  //           // visualise path
  //           let visual = new Visual(1, false);
  //           visual.poly(path);
  //
  //           // findPath returns array of coordinates...
  //           if (path.length > 0) {
  //             direction = getDirection(
  //               path[0].x - member.creep.x,
  //               path[0].y - member.creep.y,
  //             );
  //             console.log(
  //               "[D] Current location creep: x=" +
  //                 member.creep.x +
  //                 " y=" +
  //                 member.creep.y,
  //             );
  //             console.log(
  //               "[D] Next path location: x=" + path[0].x + " y=" + path[0].y,
  //             );
  //           }
  //
  //           console.log(
  //             "[D] Trying to move " +
  //               member.memberId +
  //               " into direction: " +
  //               JSON.stringify(direction),
  //           );
  //         } else {
  //           let path;
  //           if (creepTask === ATTACK) {
  //             // When the objecte is in range, don't try to follow the leader!
  //             path = findPath(member.creep, this.objective);
  //             if (path.length > 2) {
  //               // follow the leader
  //               path = findPath(member.creep, this.members[0].creep);
  //             }
  //             //console.log("[D] Path: " + JSON.stringify(path));
  //             console.log("[D] Path: " + JSON.stringify(path));
  //           } else {
  //             // guard spawn
  //             // TODO: make dynamic
  //             path = findPath(member.creep, {
  //               x: this.position.x + 1,
  //               y: this.position.y,
  //             });
  //           }
  //
  //           // visualise path
  //           let visual = new Visual(2, false);
  //           visual.poly(path);
  //
  //           // findPath returns array of coordinates...
  //           if (path.length > 0) {
  //             direction = getDirection(
  //               path[0].x - member.creep.x,
  //               path[0].y - member.creep.y,
  //             );
  //           }
  //         }
  //       }
  //
  //       if (member.role === SOLDIER) {
  //         member.task = creepTask;
  //         member.objective = this.objective;
  //         member.moveDirection = direction;
  //       }
  //
  //       member.run();
  //     }
  //   });
  // }
  //
  // #isSquadComplete() {
  //   // TODO
  // }
  //
  // #spawnMember() {
  //   // TODO
  // }
}

export default AssaultSquad;

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
