let sourceFinder = require('sourcefinder');

var roleHarvester = {
    run: function (creep) {
        // Check if there is free capacity
        if (creep.store.getFreeCapacity() > 0) {
            // Check if there is any source adjacent
            let targetSource = null;
            let sources = creep.room.find(FIND_SOURCES);
            sources.forEach((item, index) => {
                if (Math.abs(item.pos.x - creep.pos.x) < 2 && Math.abs(item.pos.y - creep.pos.y) < 2) {
                    targetSource = item;
                }
            });
            if (targetSource) {
                if (creep.harvest(targetSource) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targetSource, {visualizePathStyle: {stroke: '#00ff00'}});
                }
            }
            // If no adjacent search for available
            else {
                let availableSources = sourceFinder.findAvailableSource(creep);
                if (availableSources.length > 0) {
                    creep.moveTo(availableSources[0], {visualizePathStyle: {stroke: '#00ff00'}});
                }
            }
        }
        // Drop when full energy
        else {
            creep.drop(RESOURCE_ENERGY);
        }
    }
};

module.exports = roleHarvester;
