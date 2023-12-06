/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function(rooms) {
    const dfs = (room, visited) => {
        if(!visited.has(room)) {
            visited.add(room);

            for(const key of rooms[room]) {
                dfs(key, visited);
            }
        }

        return visited;
    };

    const visited = dfs(0, new Set());
    return visited.size === rooms.length;
};