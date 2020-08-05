let sourceFinder = {
    findAvailableSource: (creep) => {
        let room = creep.room;
        let activeSources = room.find(FIND_SOURCES_ACTIVE);
        let availableSources = [];
        activeSources.forEach((item, index) => {
            let sourceLocation = item.pos;
            let topLeft = room.lookAt(sourceLocation.x, sourceLocation.y);
            topLeft.forEach((item, index) => {
                console.log(item.type);
            })
        })
    }
};

module.exports = sourceFinder;
