'use strict';

const event = require('./event.js');
const faker = require('faker');

require('./hub.js');

event.on('delivered', payload => {
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
});
event.emit('pickup', {
  store: faker.company.companyName(),
  orderID: faker.datatype.uuid(),
  customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
  address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}`,
});
