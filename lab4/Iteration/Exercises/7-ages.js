'use strict';

const ages = (persons) => {
  const res = {};
  for (const name in persons) {
    const person = persons[name];
    res[name] = person.died - person.born;
  }

  return res;
};

module.exports = { ages };
