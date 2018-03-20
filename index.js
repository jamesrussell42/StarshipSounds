'use strict';

var alexa              = require('alexa-sdk');
var constants          = require('./constants.js');
var stateHandlers      = require('./stateHandlers.js');
var audioEventHandlers = require('./audioEventHandlers.js');
var languageStrings    = require('./strings.js');

exports.handler = (event, context, callback) => {
    

    var skill = alexa.handler(event, context, callback);
    
    skill.appId     = constants.appId;
    skill.resources = languageStrings;
    skill.debug     = constants.debug;
    skill.registerHandlers(
        stateHandlers,
        audioEventHandlers
    );
    
    if (skill.debug) {
        console.log("\n" + "******************* REQUEST **********************");
        console.log("\n" + JSON.stringify(event, null, 2));
    }

    skill.execute();
};
