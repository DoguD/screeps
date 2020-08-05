let sourceFinder = {
    findAvailableSource: (creep) => {
        let room = creep.room;
        let activeSources = room.find(FIND_SOURCES_ACTIVE);
        let availableSources = [];
        activeSources.forEach((item, index) => {
            let sourceLocation = item.pos;
            let topLeft = room.lookAt(sourceLocation.x-1, sourceLocation.y-1);
            topLeft.forEach((item,index) => {
                console.log(item.type);
            })
        })
    }
};

module.exports = sourceFinder;
