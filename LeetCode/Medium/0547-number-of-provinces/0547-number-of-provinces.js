/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function(isConnected) {
    const length = isConnected.length;
    const visited = new Array(length).fill(false);
    let province = 0;

    const dfs = (city, visited) => {
      visited[city] = true;

      for(let i=0; i<length; i++) {
        if(isConnected[city][i] === 1 && !visited[i]) {
          dfs(i, visited)
        }
      }
    }

    for(let i=0; i<length; i++) {
      if(!visited[i]) {
        province++;
        dfs(i, visited);
      }
    }

    return province;
};