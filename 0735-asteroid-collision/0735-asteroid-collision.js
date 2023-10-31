/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function(asteroids) {
    const stack = [];

    for(let i=0; i<asteroids.length; i++) {
        const asteroid = asteroids[i];
        let add = true;

            while(stack.length > 0 && asteroid < 0 && stack[stack.length-1] > 0) {
                if(Math.abs(asteroid) > Math.abs(stack[stack.length-1])) {
                    stack.pop();
                } else if(Math.abs(asteroid) === Math.abs(stack[stack.length-1])) {
                    add = false;
                    stack.pop();
                } else {
                    add = false;
                }

                if(!add) break;
            }

        if(add) {
            stack.push(asteroid);
        }
    }

    return stack;
};