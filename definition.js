// DHT20
Blockly.Blocks["citybit1_dht_measure"] = {
  init: function() {
    this.jsonInit({
      message0: Blockly.Msg.BLOCK_CITYBIT1_DHT_MEANSURE_MESSAGE0,
      args0: [
      ],
      previousStatement: null,
      nextStatement: null,
      colour: "#6C42BF",
      tooltip: Blockly.Msg.BLOCK_CITYBIT1_DHT_MEANSURE_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_CITYBIT1_DHT_MEANSURE_HELPURL
    });
  },
  getDeveloperVars: function() {
    return ['dht20'];
  }
};

Blockly.Python["citybit1_dht_measure"] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_["import_dht20"] = "from citybit1_dht20 import DHT20";
  Blockly.Python.definitions_["import_create_dht20"] = "dht20 = DHT20(SoftI2C(scl=Pin(22), sda=Pin(21)))";
  var code = "dht20.read_dht20()\n";
  return code;
};


Blockly.Blocks["citybit1_dht_read"] = {
  init: function() {
    this.jsonInit({
      message0: Blockly.Msg.BLOCK_CITYBIT1_DHT_READ_MESSAGE0,
      args0: [
        {
          type: "field_dropdown",
          name: "DATA",
          options: [
            [Blockly.Msg.BLOCK_CITYBIT1_DHT_READ_MESSAGE1, "TEMP"],
            [Blockly.Msg.BLOCK_CITYBIT1_DHT_READ_MESSAGE2, "HUMID"]
          ]
        }
      ],
      output: null,
      colour: "#6C42BF",
      tooltip: Blockly.Msg.BLOCK_CITYBIT1_DHT_READ_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_CITYBIT1_DHT_READ_HELPURL
    });
  }
};

Blockly.Python["citybit1_dht_read"] = function(block) {
  var dropdown_data = block.getFieldValue("DATA");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_["import_dht20"] = "from citybit1_dht20 import DHT20";
  Blockly.Python.definitions_["import_create_dht20"] = "dht20 = DHT20(SoftI2C(scl=Pin(22), sda=Pin(21)))";
  var code = "";
  if (dropdown_data == "TEMP")
    code = "dht20.dht20_temperature()";
  else 
    code = "dht20.dht20_humidity()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


// OLED

Blockly.Blocks['citybit1_oled_create'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "citybit1_oled_create",
        "message0": Blockly.Msg.CITYBIT1_OLED_CREATE_MESSAGE0,
        "args0": [
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#6C42BF",
        "tooltip": Blockly.Msg.CITYBIT1_OLED_CREATE_TOOLTIP,
        "helpUrl": Blockly.Msg.CITYBIT1_OLED_CREATE_HELPURL
      }
    );
  },
  getDeveloperVars: function() {
    return ['lcd_oled'];
  }
};

Blockly.Python['citybit1_oled_create'] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_['import_oled'] = 'from plantbit2_ssd1306 import SSD1306_I2C';
  // oled = SSD1306_I2C(oled_width, oled_height, i2c)
  var code = 'lcd_oled = SSD1306_I2C( 128, 64 , SoftI2C(scl=Pin(22), sda=Pin(21)))\n';
  return code;
};

Blockly.Blocks['citybit1_oled_text'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "citybit1_oled_text",
        "message0": Blockly.Msg.CITYBIT1_OLED_TEXT_MESSAGE0,
        "args0": [
          {
            "type": "input_value",
            "name": "TEXT"
          },
          {
            "type": "input_value",
            "name": "X"
          },
          {
            "type": "input_value",
            "name": "Y"
          },
          {
            "type": "input_dummy"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#6C42BF",
        "tooltip": Blockly.Msg.CITYBIT1_OLED_TEXT_TOOLTIP,
        "helpUrl": Blockly.Msg.CITYBIT1_OLED_TEXT_HELPURL
      }
    );
  },
  getDeveloperVars: function() {
    return ['lcd_oled'];
  }
};

Blockly.Python['citybit1_oled_text'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  //oled.text('Hello, World 1!', 0, 0, col); oled.show()
  var code = 'lcd_oled.text(str(' + value_text + '), ' + value_x + ', ' + value_y + ', 1); lcd_oled.show()\n';
  return code;
};

Blockly.Blocks['citybit1_oled_fill'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "citybit1_oled_fill",
        "message0": Blockly.Msg.CITYBIT1_OLED_FILL_MESSAGE0,
        "args0": [
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#6C42BF",
        "tooltip": Blockly.Msg.CITYBIT1_OLED_FILL_TOOLTIP,
        "helpUrl": Blockly.Msg.CITYBIT1_OLED_FILL_HELPURL
      }
    );
  },
  getDeveloperVars: function() {
    return ['lcd_oled'];
  }
};

Blockly.Python['citybit1_oled_fill'] = function(block) {
  // TODO: Assemble Python into code variable.
  //oled.fill(1); oled.show()
  var code = 'lcd_oled.fill(0); lcd_oled.show()\n';
  return code;
};

// LED
Blockly.Blocks['citybit1_led'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "citybit1_led",
        "message0": "%1 đèn LED chân %2",
        "args0": [
          {
            type: "field_dropdown",
            name: "action",
            options: [
              ["bật", "1"],
              ["tắt", "0"],
            ],
          },
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#6C42BF",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['citybit1_led'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  var action = block.getFieldValue("action");
  // TODO: Assemble Python into code variable.
  var code = '' + dropdown_name + '.write_digital(' + action + ')\n';
  return code;
};

// Cảm biến chuyển động PIR
Blockly.Blocks['citybit1_detect_motion'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "citybit1_detect_motion",
        "message0": "cảm biến PIR chân %1 phát hiện có người",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          },
        ],
        output: "Boolean",
        "colour": "#6C42BF",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['citybit1_detect_motion'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '' + dropdown_name + '.read_digital()==1';
  return [code, Blockly.Python.ORDER_NONE];
};

// Cảm biến ánh sáng
Blockly.Blocks['citybit1_light_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "citybit1_light_sensor",
        "message0": "đọc cảm biến ánh sáng (%%) chân %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ]
            ]
          }
        ],
        "output": null,
        "colour": "#6c42bf",
        "tooltip": "Đọc giá trị của cảm biến ánh sáng",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['citybit1_light_sensor'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'round(translate((' + dropdown_name + '.read_analog()), 0, 4095, 0, 100))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


// Cảm biến âm thanh
Blockly.Blocks['citybit1_sound_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "citybit1_sound_sensor",
        "message0": "đọc cảm biến âm thanh (%%) chân %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ]
            ]
          }
        ],
        "output": null,
        "colour": "#6c42bf",
        "tooltip": "Đọc giá trị của cảm biến âm thanh",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['citybit1_sound_sensor'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'round(translate((' + dropdown_name + '.read_analog()), 0, 4095, 0, 100))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


// Cảm biến siêu âm

Blockly.Blocks['citybit1_ultrasonic_create'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "citybit1_ultrasonic_create",
        "message0": Blockly.Msg.ULTRASONIC_CREATE_MESSAGE0,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "TRG",
            "options": [
              [
                "P10",
                "pin10"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "ECH",
            "options": [
              [
                "P13",
                "pin13"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#6C42BF",
        "tooltip": Blockly.Msg.CITYBIT1_ULTRASONIC_CREATE_TOOLTIP,
        "helpUrl": Blockly.Msg.CITYBIT1_ULTRASONIC_CREATE_HELPURL
      }
    );
  },
  getDeveloperVars: function() {
    return ['ultrasonic_city_bit'];
  }
};

Blockly.Python['citybit1_ultrasonic_create'] = function(block) {
  var dropdown_trg = block.getFieldValue('TRG');
  var dropdown_ech = block.getFieldValue('ECH');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_ultrasonic'] = 'from citybit1_hcsr04 import HCSR04';
  var code = 'ultrasonic_city_bit = HCSR04(trigger_pin=' + dropdown_trg + '.pin, echo_pin=' + dropdown_ech + '.pin)\n';
  return code;
};

Blockly.Blocks['citybit1_ultrasonic_read'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "citybit1_ultrasonic_read",
        "message0": Blockly.Msg.CITYBIT1_ULTRASONIC_READ_MESSAGE0,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "cm",
                "CM"
              ],
              [
                "mm",
                "MM"
              ]
            ]
          }
        ],
        "output": null,
        "colour": "#6C42BF",
        "tooltip": Blockly.Msg.CITYBIT1_ULTRASONIC_READ_TOOLTIP,
        "helpUrl": Blockly.Msg.CITYBIT1_ULTRASONIC_READ_HELPURL
      }
    );
  },
  getDeveloperVars: function() {
    return ['ultrasonic_city_bit'];
  }
};

Blockly.Python['citybit1_ultrasonic_read'] = function(block) {
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_type == 'CM') {
    code = 'ultrasonic_city_bit.distance_cm()';
  } else {
    code = 'ultrasonic_city_bit.distance_mm()';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['citybit1_ultrasonic_checkdistance'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "citybit1_ultrasonic_checkdistance",
        "message0": Blockly.Msg.CITYBIT1_ULTRASONIC_CHECK_MESSAGE0,
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "DISTANCE",
            "check": "Number"
          },
          {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "cm",
                "CM"
              ],
              [
                "mm",
                "MM"
              ]
            ]
          }
        ],
        "output": "Boolean",
        "colour": "#6C42BF",
        "tooltip": Blockly.Msg.CITYBIT1_ULTRASONIC_CHECK_TOOLTIP,
        "helpUrl": Blockly.Msg.CITYBIT1_ULTRASONIC_CHECK_HELPURL
      }
    );
  },
  getDeveloperVars: function() {
    return ['ultrasonic_city_bit'];
  }
};

Blockly.Python['citybit1_ultrasonic_checkdistance'] = function(block) {
  var value_distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_type == 'CM')
    code = 'ultrasonic_city_bit.distance_cm() < ' + value_distance;
  else
    code = 'ultrasonic_city_bit.distance_mm() < ' + value_distance;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


// Cảm biến ngập nước
Blockly.Blocks['citybit1_water_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "citybit1_water_sensor",
        "message0": "đọc cảm biến ngập nước chân %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ]
            ]
          }
        ],
        "output": null,
        "colour": "#6c42bf",
        "tooltip": "Đọc giá trị của cảm biến ngập nước",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['citybit1_water_sensor'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '' + dropdown_name + '.read_analog()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['citybit1_detect_water'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "citybit1_detect_water",
        "message0": "cảm biến ngập nước chân %1 phát hiện ngập nước",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ]
            ]
          }
        ],
        "output": null,
        "colour": "#6c42bf",
        "tooltip": "Cảm biến ngập nước phát hiện ngập nước",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['citybit1_detect_water'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '' + dropdown_name + '.read_analog() < 200';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


// Cảm biến chất lượng không khí

Blockly.Blocks['citybit1_mq135_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "citybit1_mq135_sensor",
        "message0": "đọc cảm biến đo chất lượng không khí chân %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ]
            ]
          }
        ],
        "output": null,
        "colour": "#6c42bf",
        "tooltip": "Đọc giá trị của cảm biến đo chất lượng không khí MQ135",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['citybit1_mq135_sensor'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '' + dropdown_name + '.read_analog()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};