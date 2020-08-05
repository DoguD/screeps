let roles = {
    harvester: require('role.harvester'),
    upgrader: require('role.upgrader'),
    builder: require('role.builder'),
    carrier: require('role.carrier')
};

let spawner = require('spawner');
let growthManager = require('growth');
let clearer = require('clear');

module.exports.loop = () => {
    clearer.clearMemory();
    spawner.checkSpawn();

    for (let name in Game.creeps) {
        let creep = Game.creeps[name];
        if (creep.memory.role === 'harvester') {
            roles.harvester.run(creep)
        } else if (creep.memory.role === 'upgrader') {
            roles.upgrader.run(creep)
        } else if (creep.memory.role === 'builder') {
            roles.builder.run(creep)
        } else if (creep.memory.role === 'carrier') {
            roles.carrier.run(creep)
        }
    }

    growthManager.checkGrowth();
};
