'use strict';

const events = require('./event.js');
require('./vendor.js');
require('./driver.js');

events.on('pickup', payload => timeStamp('pickup', payload));
events.on('in-transit', payload => timeStamp('in-transit', payload));
events.on('delivered', payload => timeStamp('delivered', payload));

function timeStamp(event, payload) {
  let time = new Date().toISOString();
  console.log(
    'EVENT',
    `{event: ${event},time:${time}, payload:${JSON.stringify(payload)}}`
  );
}
