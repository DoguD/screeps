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
            let pUpgrader = spawn.memory.pUpgrader;
            let pBuilder = spawn.memory.pBuilder;
            let pHarvester = spawn.memory.pHarvester;
            let lPU = spawn.memory.lastPopulationUpdate;
            // Creep count
            if ((pUpgrader < pBuilder - 3) && Game.time - lPU > 100) {
                spawn.memory.pUpgrader = pUpgrader + 1;
                spawn.memory.lastPopulationUpdate = Game.time;
                console.log('Upgrader population increased.');
            } else if ((pBuilder < pHarvester + 2) && Game.time - lPU > 100) {
                spawn.memory.pBuilder = pBuilder + 1;
                spawn.memory.lastPopulationUpdate = Game.time;
                console.log('Builder population increased.');
            } else if (Game.time - lPU > 100){
                spawn.memory.pHarvester = pHarvester + 1;
                spawn.memory.lastPopulationUpdate = Game.time;
                console.log('Harvester population increased.');
            }
        }
    }
};

module.exports = growthManager;
