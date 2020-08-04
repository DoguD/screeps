let spawn = Game.spawns['Spawn1'];

var spawner = {
    checkSpawn: function () {
        let population = {
            harvester: spawn.memory.pHarvester,
            builder: spawn.memory.pBuilder,
            upgrader: spawn.memory.pUpgrader,
        };
        console.log(population.harvester);
        console.log(population.builder);
        console.log(population.upgrader);

        // HARVESTERS
        let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester');
        console.log(harvesters.length);
        console.log(harvesters.length < population.harvester);
        if (harvesters.length < population.harvester) {
            console.log('hey');
            let newName = 'Harvester' + Game.time;
            spawn.spawnCreep([WORK, WORK, CARRY, MOVE], newName,
                {memory: {role: 'harvester'}});
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
            let newName = 'Builder' + Game.time;
            spawn.spawnCreep([WORK, WORK, CARRY, MOVE], newName, {memory: {role: 'builder'}});
        }
        //console.log('Harvesters:' + harvesters.length.toString() + ' / Upgraders: ' + upgraders.length.toString() + ' / Builders: ' + builders.length.toString())
    }
};

module.exports = spawner;
