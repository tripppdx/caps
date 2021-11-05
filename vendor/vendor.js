'use strict';

const event = require('../hub/event.js');
const faker = require('faker');
const logDelivery = require('./log-delivery.js');

event.on('delivered', payload => logDelivery(payload));

function pickup() {
  let payload = {
    store: '1-206-flowers',
    orderID: faker.datatype.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}`,
  };
  event.emit('pickup', payload);
}

pickup();
setInterval(pickup, 2000);
