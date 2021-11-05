'use strict';

const logEvent = require('../hub/log-event.js');

describe('testing hub server handler', () => {
  console.log = jest.fn();
  it('should log a mock event and payload', () => {
    let payload = {
      store: '1-206-flowers',
      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA',
    };

    logEvent(payload);
    expect(console.log).toHaveBeenCalled();
  });
});
