var spawner = {
    checkSpawn: function () {
        let spawn = Game.spawns['Spawn1'];
        let population = {
            harvester: spawn.memory.pHarvester,
            builder: spawn.memory.pBuilder,
            upgrader: spawn.memory.pUpgrader,
            carrier: spawn.memory.carrier
        };

        // BUILDER
        let builders = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder');
        if (builders.length < population.builder) {
            let newName = 'Builder' + Game.time;

            if (spawn.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE], newName, {memory: {role: 'builder'}}) === -6) {
                if (spawn.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, MOVE], newName, {memory: {role: 'builder'}}) === -6) {
                    if (spawn.spawnCreep([WORK, WORK, CARRY, MOVE, MOVE], newName, {memory: {role: 'builder'}}) === -6) {
                        spawn.spawnCreep([WORK, WORK, CARRY, MOVE], newName, {memory: {role: 'builder'}})
                    }
                }
            }
        }

        // Carrier
        let carriers = _.filter(Game.creeps, (creep) => creep.memory.role === 'carrier');
        if (carriers.length < population.carrier) {
            let newName = 'Carrier' + Game.time;
            if (spawn.spawnCreep([WORK, CARRY, MOVE, MOVE, MOVE], newName, {memory: {role: 'carrier'}}) === -6) {
                if (spawn.spawnCreep([WORK, CARRY, MOVE, MOVE], newName, {memory: {role: 'carrier'}}) === -6) {
                    spawn.spawnCreep([WORK, CARRY, MOVE], newName, {memory: {role: 'carrier'}})
                }
            }
        }

        // HARVESTERS
        let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester');
        if (harvesters.length < population.harvester) {
            let newName = 'Harvester' + Game.time;
            if (spawn.spawnCreep([WORK, WORK, WORK, WORK, CARRY, MOVE], newName, {memory: {role: 'harvester'}}) === -6) {
                if (spawn.spawnCreep([WORK, WORK, WORK, CARRY, MOVE], newName, {memory: {role: 'harvester'}}) === -6) {
                    if (spawn.spawnCreep([WORK, WORK, CARRY, MOVE], newName, {memory: {role: 'harvester'}}) === -6) {
                        spawn.spawnCreep([WORK, CARRY, MOVE], newName, {memory: {role: 'harvester'}})
                    }
                }
            }
        }

        // UPGRADERS
        let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role === 'upgrader');
        if (upgraders.length < population.upgrader) {
            let newName = 'Upgrader' + Game.time;
            if (spawn.spawnCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], newName, {memory: {role: 'upgrader'}}) === -6) {
                if (spawn.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, MOVE], newName, {memory: {role: 'upgrader'}}) === -6) {
                    if (spawn.spawnCreep([WORK, WORK, CARRY, MOVE, MOVE], newName, {memory: {role: 'upgrader'}}) === -6) {
                        spawn.spawnCreep([WORK, WORK, CARRY, MOVE], newName, {memory: {role: 'upgrader'}})
                    }
                }
            }
        }

        //console.log('Harvesters:' + harvesters.length.toString() + ' / Upgraders: ' + upgraders.length.toString() + ' / Builders: ' + builders.length.toString())
    }
};

module.exports = spawner;
