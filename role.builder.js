let roles = {
    upgrader: require('role.upgrader'),
};

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function (creep) {
        // Building, out of energy
        if (creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
        }
        // Not builiding, full
        if (!creep.memory.building && creep.store.getFreeCapacity() == 0) {
            creep.memory.building = true;
            creep.say('🚧 build');
        }
        // Building
        if (creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            //targets = _.sortBy(targets, s => creep.pos.getRangeTo(s))
            if (targets.length > 0) {
                if (creep.build(targets[0]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#0000ff'}});
                }
            }
            // If no build target than repair
            else {
                let repairTargets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return structure.hits < 1000 && structure.hitsMax > 1000;
                    }
                });
                if (repairTargets.length > 0) {
                    if (creep.repair(repairTargets[0]) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(repairTargets[0], {visualizePathStyle: {stroke: '#00ffff'}});
                    }
                }
                // If no build targets and repairs then ugrade
                else {
                    //console.log(creep.name + ' doing upgrade');
                    roles.upgrader.run(creep);
                }
            }
        } else if (creep.store.getFreeCapacity() > 0) {
            let sources = creep.room.find(FIND_SOURCES_ACTIVE);
            //sources = _.sortBy(sources, s => creep.pos.getRangeTo(s))
            if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#0000ff'}});
            }
        }
    }
};

module.exports = roleBuilder;
