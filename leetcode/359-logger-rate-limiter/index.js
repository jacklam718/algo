var Logger = function () {
  this.logs = new Map();
  this.interval = 10;
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  const lastTimestamp = this.logs.get(message);
  if (!lastTimestamp || timestamp >= lastTimestamp) {
    this.logs.set(message, timestamp + this.interval);
    return true;
  }
  return false;
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
