'use strict';

const event = require('./event.js');
require('./hub.js');

event.on('pickup', payload => {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderID}`);
    event.emit('in-transit', payload);
  }, 2000);
  setTimeout(() => {
    console.log(`DRIVER: delivered up${payload.orderID}`);
    event.emit('delivered', payload);
  }, 5000);
});
