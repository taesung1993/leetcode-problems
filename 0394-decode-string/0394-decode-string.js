/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function(s) {
    const stack = [];

    for(let i=0; i < s.length; i++) {
      const char = s[i];

      if(stack.length > 0 && char === ']') {
        let word = '';

        while(stack.length && stack.slice(-1)[0] !== '[') {
          word = stack.pop() + word;
        }

        stack.pop();

        let num = '';
        while(stack.length && !isNaN(stack.slice(-1)[0])) {
          num = stack.pop() + num;
        }

        stack.push(word.repeat(num));
      } else {
        stack.push(char);
      }
    }

    return stack.join('');
};