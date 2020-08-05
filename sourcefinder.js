let sourceFinder = {
    findAvailableSource: (creep) => {
        let activeSources = creep.room.find(FIND_SOURCES_ACTIVE);
        let availableSources = [];
        activeSources.forEach((item, index) => {
            let sourceLocation = item.pos;
            console.log(creep.room.get(item.pos.x, item.pos.y))
        })
    }
};

module.exports = sourceFinder;
