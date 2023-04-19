'use strict';

const emitter = require('../eventPool');

function driverReadyToPickPkg2 (payload) {
  emitter.emit('2driverReadyToPickPkg',payload);
}

function driverAlertSysPkgPicked3 (payload){
  emitter.emit('3driverAlertSysPkgPicked', payload);
}

function driverAlertSysDelivered4 (payload){
  emitter.emit('4driverAlertSysDelivered', payload);
}

function vendorPkgDelivered5 (payload){
  emitter.emit('5vendorPkgDelivered', payload);
}

module.exports = {
  driverReadyToPickPkg2,
  driverAlertSysPkgPicked3,
  driverAlertSysDelivered4,
  vendorPkgDelivered5
};