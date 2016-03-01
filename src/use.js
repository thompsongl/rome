'use strict';

var momentum = require('./momentum');

function use (moment, utc) {
  var useUtc = typeof utc !== 'undefined' && utc === 'utc';
  this.moment = momentum.moment = moment;
  this.momentParser = momentum.momentParser = useUtc ? moment.utc : moment;
}

module.exports = use;
