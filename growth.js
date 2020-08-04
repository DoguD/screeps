var growthManager = {
    checkGrowth: function () {
        let spawn = Game.spawns['Spawn1'];
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
            if (spawn.memory.pUpgrader < (spawn.memory.pBuilders - 1)) {
                spawn.memory.pUpgrader = spawn.memory.pUpgrader + 1;
                console.log('Upgrader population increased.');
            } else if (spawn.memory.pBuilders < spawn.memory.pHarvester - 1) {
                spawn.memory.pBuilders = spawn.memory.pBuilders + 1;
                console.log('Builder population increased.');
            } else {
                spawn.memory.pHarvester = spawn.memory.pHarvester + 1;
                console.log('Harvester population increased.');
            }
        }
    }
};

module.exports = growthManager;
