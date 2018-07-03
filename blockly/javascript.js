Blockly.JavaScript['pin_output'] = function (block) {
  var b7 = block.getFieldValue('bit7');
  var b6 = block.getFieldValue('bit6');
  var b5 = block.getFieldValue('bit5');
  var b4 = block.getFieldValue('bit4');
  var b3 = block.getFieldValue('bit3');
  var b2 = block.getFieldValue('bit2');
  var b1 = block.getFieldValue('bit1');
  var b0 = block.getFieldValue('bit0');
  var vc = Blockly.JavaScript.valueToCode(block, 'convert', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "getPinOut(board,'" + b7 + "','" + b6 + "'," + "'" + b5 + "'," + "'" + b4 + "'," +
    "'" + b3 + "'," + "'" + b2 + "'," + "'" + b1 + "'," + "'" + b0 + "').digitalWrite(" + vc + ");\n";
  return code;
}

Blockly.JavaScript['hex_convert'] = function (block) {
  var value_numhex = Blockly.JavaScript.valueToCode(block, 'numHex');
  var code = "parseInt(" + value_numhex + ",16)";
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['bin_convert'] = function (block) {
  var value_numbin = Blockly.JavaScript.valueToCode(block, 'numBin');
  var code = "parseInt(" + value_numbin + ",2)";
  return [code, Blockly.JavaScript.ORDER_NONE];
};