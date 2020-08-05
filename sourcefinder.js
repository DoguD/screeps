let sourceFinder = {
    findAvailableSource: (creep) => {
        let room = creep.room;
        let activeSources = room.find(FIND_SOURCES_ACTIVE);
        let availableSources = [];
        activeSources.forEach((item, index) => {
            let available = false;
            let sourceLocation = item.pos;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let location = room.lookAt(sourceLocation.x - 1 + i, sourceLocation.y - 1 + j);
                    let microAvailable = true;
                    location.forEach((item, index) => {
                        if ((item.type === 'terrain' && item.terrain !== 'plain') || item.type === 'creep') {
                            microAvailable = false;
                        }
                    });
                    if (microAvailable) {
                        available = true;
                        break;
                    }
                }
            }
            if (available) {
                availableSources.push(item)
            }
        });
        return availableSources;
    }
};

module.exports = sourceFinder;
