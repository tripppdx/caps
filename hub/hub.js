'use strict';

const events = require('./event.js');
const logEvent = require('./log-event.js');

events.on('pickup', payload => logEvent('pickup', payload));
events.on('in-transit', payload => logEvent('in-transit', payload));
events.on('delivered', payload => logEvent('delivered', payload));
