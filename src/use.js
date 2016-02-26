'use strict';

var momentum = require('./momentum');

function use (moment, utc) {
  this.moment = momentum.moment = moment;
  if(utc === 'utc'){
    this.momentParser = momentum.momentParser = moment.utc;
  }
}

module.exports = use;
