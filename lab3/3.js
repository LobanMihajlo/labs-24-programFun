'use strict';

const ipConverter = (ip = '10.0.0.1') => {
    const fn = (currentRes, item) => (currentRes << 8) + parseInt(item);
    return ip.split('.').reduce(fn, 0);
  };

console.log(ipConverter());