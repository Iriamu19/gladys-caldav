module.exports = function(sails) {

	var getPlanning   = require('./lib/getPlanning.js');	
	var checkNewEmail = require('./lib/getEmail.js');
	var exec 		  = require('./lib/exec.js');
    var setup 		  = require('./lib/setup.js');

    return {
        getPlanning,
        checkNewMail,
        exec,
        setup
    };
};