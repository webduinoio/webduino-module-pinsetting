+(function (window, webduino) {

  'use strict';

  window.getPinOut = function (board, bitsetting) {
    return new webduino.module.PinSetting(board, Array.from(arguments));
  };

}(window, window.webduino));