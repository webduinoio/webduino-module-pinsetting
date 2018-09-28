+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(webduino || {});
  } else {
    module.exports = factory;
  }
}(function (scope) {
  'use strict';

  var proto;
  var Module = scope.Module;
  var Pin = scope.Pin;

  function PinSetting(board, bits) {
    Module.call(this);
    this.bits = bits;
    this.board = board;
    this.pins = initPin(board, bits);
  }

  function initPin(board, bits) {
    var pins = bits.filter(function (pinNumber) {
      return pinNumber !== "x";
    }).map(function (pinNumber) {
      var pin = board.getPin(pinNumber);
      if (pin.capabilities[Pin.PWM]) {
        board.setDigitalPinMode(pin.number, Pin.PWM);
      } else {
        board.setDigitalPinMode(pin.number, Pin.DOUT);
      }
      return pin;
    });
    return pins;
  }

  PinSetting.prototype = proto = Object.create(Module.prototype, {
    constructor: {
      value: PinSetting
    }
  });

  proto.digitalWrite = function (number) {
    try {
      this.pins.reverse().forEach(function (pin) {
        pin.write(number & 1);
        number = number >>> 1;
      });
    } catch (e) {
      console.log(">>>", e);
    }
  }

  scope.module.PinSetting = PinSetting;
}));