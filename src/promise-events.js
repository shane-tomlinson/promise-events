/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


window.PromiseEvents = (function () {

  function PromiseEvents() {
  }

  PromiseEvents.prototype = {
    listen: function (message) {
      this._deferreds = this._deferreds || {};
      this._deferreds[message] = this._deferreds[message] || [];

      var self = this;
      return new Promise(function (resolve, reject) {
        self._deferreds[message].push({
          resolve: resolve,
          reject: reject
        });
      });
    },

    emit: function (message, value) {
      if (this._deferreds && this._deferreds.message) {
        this._deferreds[message].forEach(function (deferred) {
          deferred.resolve(value);
        });
      }
    }
  };

  return PromiseEvents;
}());

