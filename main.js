let roles = {
    harvester: require('role.harvester'),
    upgrader: require('role.upgrader'),
    builder: require('role.builder')
};

let spawner = require('spawner');
let growthManager = requier('growth');
let clearer = require('clear');

module.exports.loop = () => {
    clearer.clearMemory();
    spawner.checkSpawn();
    growthManager.checkGrowth();

    for (let name in Game.creeps) {
        let creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roles.harvester.run(creep)
        } else if (creep.memory.role == 'upgrader') {
            roles.upgrader.run(creep)
        } else if (creep.memory.role == 'builder') {
            roles.builder.run(creep)
        }
    }
};
