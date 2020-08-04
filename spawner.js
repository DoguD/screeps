var spawner = {
    checkSpawn: function () {
        let spawn = Game.spawns['Spawn1'];
        let population = {
            harvester: spawn.memory.pHarvester,
            builder: spawn.memory.pBuilder,
            upgrader: spawn.memory.pUpgrader,
        };

        // HARVESTERS
        let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester');
        if (harvesters.length < population.harvester) {
            console.log('Trying to generate harvester');
            let newName = 'Harvester' + Game.time;
            console.log('Name given');
            spawn.spawnCreep([WORK, WORK, CARRY, MOVE], newName,
                {memory: {role: 'harvester'}});
            console.log('After spawn');
        }

        // UPGRADERS
        let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role === 'upgrader');
        if (upgraders.length < population.upgrader) {
            let newName = 'Upgrader' + Game.time;
            spawn.spawnCreep([WORK, CARRY, MOVE, MOVE], newName, {memory: {role: 'upgrader'}});
        }

        // BUILDER
        let builders = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder');
        if (builders.length < population.builder) {
            console.log('Trying to generate builder');
            let newName = 'Builder' + Game.time;
            spawn.spawnCreep([WORK, WORK, CARRY, MOVE], newName, {memory: {role: 'builder'}});
        }
        //console.log('Harvesters:' + harvesters.length.toString() + ' / Upgraders: ' + upgraders.length.toString() + ' / Builders: ' + builders.length.toString())
    }
};

module.exports = spawner;
