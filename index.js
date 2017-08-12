module.exports = function(sails) {

	var getPlanning   = require('./lib/getPlanning.js');
	var exec 		  		= require('./lib/exec.js');
  var setup 		    = require('./lib/setup.js');
	var config 		    = require('./lib/config.js');
	var command		    = require('./lib/command.js');

    return {
        getPlanning,
        exec,
        setup,
				config,
				command
    };
};
