
const RecentCounter = function() {
  this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  if(t === null) return null;

  if(t > 3000) {  
    let delta = t - this.queue[0];

    while(this.queue.length > 0 && delta > 3000) {
      this.queue.shift();
      delta = t - this.queue[0];
    }
  }

  this.queue.push(t);

  return this.queue.length;
};