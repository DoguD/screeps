let spawn = Game.spawns['Spawn1'];

var growthManager = {
    checkGrowth: function () {
        // Energy buildings
        let excessEnergy = true;
        let energyBuildings = spawn.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN) &&
                    structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
            }
        });
        if (energyBuildings.length > 0) {
            excessEnergy = false;
        }

        // Growth
        if (excessEnergy) {
            // Creep count
            let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester');
            let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role === 'upgrader');
            let builders = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder');
            if (upgraders < builders - 1) {
                spawn.memory.pUpgrader = spawn.memory.pUpgrader + 1;
                console.log ('Upgrader population increased.');
            } else if (builders < harvesters - 1) {
                spawn.memory.pBuilders = spawn.memory.pBuilders + 1;
                console.log ('Builder population increased.');
            } else {
                spawn.memory.pHarvester = spawn.memory.pHarvester + 1;
                console.log ('Harvester population increased.');
            }
        }
    }
};

module.exports = growthManager;
