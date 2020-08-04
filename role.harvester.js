let roles = {
    builder: require('role.builder'),
};

var roleHarvester = {
    run: function (creep) {
        // Check if there is free capacity
        if (creep.store.getFreeCapacity() > 0) {
            // Get closest source with energy
            let sources = creep.room.find(FIND_SOURCES_ACTIVE);
            //sources = _.sortBy(sources, s => creep.pos.getRangeTo(s))
            // Harvest or move
            if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#00ff00'}});
            }
        } else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            if (targets.length > 0) {
                if (creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#00ff00'}});
                }
            }
            // If all stocks are full do builder job
            else {
                roles.builder.run(creep);
            }
        }
    }
};

module.exports = roleHarvester;
