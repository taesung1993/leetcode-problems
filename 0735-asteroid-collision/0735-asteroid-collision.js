/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function(asteroids) {
    const stack = [asteroids[0]];

    for(let i=1; i<asteroids.length; i++) {
        let add = true;

        if(asteroids[i] < 0 && stack[stack.length-1] > 0) {
            while(stack.length && stack[stack.length-1] > 0) {
                if(Math.abs(asteroids[i]) > Math.abs(stack[stack.length-1])) {
                    stack.pop();
                } else if(Math.abs(asteroids[i]) === Math.abs(stack[stack.length-1])) {
                    stack.pop();
                    add = false;
                } else {
                    add = false;
                }
                if(!add) break;
            }
        }

        if(add) {
            stack.push(asteroids[i]);
        }
    }

    return stack;
};