let population = {
        harvester: 2,
        upgrader: 1,
        builder: 0
};

var spawner = {
    checkSpawn: function () {
        // HARVESTERS
        let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        if(harvesters.length < population.harvester) {
            let newName = 'Harvester' + Game.time;
            Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, MOVE], newName,
                {memory: {role: 'harvester'}});
        }

        // UPGRADERS
        let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        if(upgraders.length < population.upgrader) {
            let newName = 'Upgrader' + Game.time;
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], newName, {memory: {role: 'upgrader'}});
        }

        // BUILDER
        let builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        if(builders.length < population.builder) {
            let newName = 'Builder' + Game.time;
            Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY,MOVE], newName, {memory: {role: 'builder'}});
        }
        //console.log('Harvesters:' + harvesters.length.toString() + ' / Upgraders: ' + upgraders.length.toString() + ' / Builders: ' + builders.length.toString())
    }
};

module.exports = spawner;
