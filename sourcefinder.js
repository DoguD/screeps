let sourceFinder = {
    findAvailableSource: (creep) => {
        let activeSources = creep.room.find(FIND_SOURCES_ACTIVE);
        let availableSources = [];
        activeSources.forEach((item, index) => {
            let sourceLocation = item.pos.x;
            console.log(sourceLocation);
        })
    }
};

module.exports = sourceFinder;
