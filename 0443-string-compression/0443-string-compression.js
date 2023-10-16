/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function(chars) {
  const copied = [...chars];
  const length = copied.length;
  let prev = copied[0];
  let count = 1;
  
  for(let i=1; i<copied.length; i++) {
    const current = copied[i];

    if(prev === current) {
      count += 1;
    } else {
      if(count > 1) {
        chars.push(prev, ...count.toString().split(''));
      } else {
        chars.push(prev);
      }

      count = 1;
    }
    prev = current;
  }

  if(count > 1) {
    chars.push(prev, ...count.toString().split(''));
  } else {
    chars.push(prev);
  }
  chars.splice(0, length);

  return chars.length;
};