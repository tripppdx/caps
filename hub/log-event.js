'use strict';

const logEvent = (event, payload) => {
  let log = {
    event,
    time: new Date().toString(),
    payload,
  };

  console.log('EVENT', log);
};

module.exports = logEvent;
