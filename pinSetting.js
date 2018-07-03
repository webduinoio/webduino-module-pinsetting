+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(webduino || {});
  } else {
    module.exports = factory;
  }
}(function (scope) {
  'use strict';

  var self;
  var proto;
  var Module = scope.Module;

  function PinSetting(board, bits) {
    Module.call(this);
    this.bits = bits;
    this.board = board;
  }

  PinSetting.prototype = proto = Object.create(Module.prototype, {
    constructor: {
      value: PinSetting
    }
  });

  proto.digitalWrite = function (number) {
    try {
      for (var i = this.bits.length; i >= 1; i--) {
        var pinNum = parseInt(this.bits[i] == 'x' ? 0 : this.bits[i]);
        if (pinNum > 1) {
          var pin = getPin(this.board, pinNum);
          pin.write(number & 1);
          number = number >>> 1;
        }
      }
    } catch (e) {
      console.log(">>>", e);
    }
  }

  scope.module.PinSetting = PinSetting;
}));