/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


describe('promise-events', function () {
  'use strict';
  var promiseEvents;
  var assert = chai.assert;

  describe('listen/emit', function () {
    beforeEach(function () {
      promiseEvents = new PromiseEvents();
    });

    it('returns an object', function () {
      assert.isTrue(true);
      var promise = promiseEvents.listen('message');
      promiseEvents.emit('message', true);
      promiseEvents.emit('message', false);

      return promise.then(function (value) {
        assert.isTrue(value);
        console.log('asdf');
        return false;
      }).then(function (value) {
        assert.isFalse(value);
      });
    });
  });
});

