'use strict';

const event = require('../hub/event.js');
const { handlePickup, handleDelivered } = require('./handle-pickup.js');

event.on('pickup', payload => {
  // setTimeout(() => {
  //   handlePickup(payload);
  //   event.emit('in-transit', payload);
  // }, 1000);
  // setTimeout(() => {
  //   handleDelivered(payload);
  //   event.emit('delivered', payload);
  // }, 2000);
  handlePickup(payload);
  event.emit('in-transit', payload);
  handleDelivered(payload);
  event.emit('delivered', payload);
});
