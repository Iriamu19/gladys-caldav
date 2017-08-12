var getPlanning   = require('./getPlanning.js');
var Promise = require('bluebird');

module.exports = function() {
    // we search all events for today
    return getPlanning()
      .then(function(){
        sails.log.error('Module setup.js not finish');
        return Promise.reject(new Error('Module setup.js not finish'));
      });
};
