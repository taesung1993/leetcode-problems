/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function(rooms) {
    const visited = new Map([[0, true]]);
    const queue = rooms[0];

    while(queue.length) {
        const size = queue.length;

        for(let i=0; i<size; i++) {
            const key = queue.shift();

            if(visited.has(key)) {
                continue;
            }

            visited.set(key, true);
            queue.push(...rooms[key]);
        }
    }

    return rooms.length === visited.size;
};