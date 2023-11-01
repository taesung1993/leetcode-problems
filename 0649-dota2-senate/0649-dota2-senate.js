/**
 * @param {string} senate
 * @return {string}
 */
const predictPartyVictory = function(senate) {
  const queue = senate.split('');
  const winner = {
    R: 'Radiant',
    D: 'Dire'
  };

  while(queue.length > 1) {
    const senator = queue[0];
    const foundIndex = queue.findIndex(s => s !== senator);

    if(foundIndex > -1) {
      queue.splice(foundIndex, 1);
      queue.push(queue.shift());
    } else {
      break;
    }
  }

  return winner[queue[0]];
};