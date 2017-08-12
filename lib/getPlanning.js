var hue = require("node-caldav-mod");

module.exports = function(){
  /**
 * Get the events from a CalDAV calendar for a specific range of dates
 * @param {string} url - CalDAV Calendar URL
 * @param {string} username - CalDAV Username
 * @param {string} password - CalDAV password
 * @param {string} startDate - Date from which to start, format: YYYYMMDDTHHmmsZ (example: 20140101T120000Z)
 * @param {string} endDate - CalDAV password
 * @param {function} callback - Callback function
 * @function
 */

  //
  // Date.prototype.yyyymmdd = function() {
  // var mm = this.getMonth() + 1; // getMonth() is zero-based
  // var dd = this.getDate();
  //
  // return [this.getFullYear(),
  //         (mm>9 ? '' : '0') + mm,
  //         (dd>9 ? '' : '0') + dd
  //        ].join('');
  // };
  //
  // var date = new Date();
  // date.yyyymmdd();

  // date hardcodée pour test

  return gladys.param.getValues(['gladys-caldav-url', 'gladys-caldav-usr', 'gladys-caldav-pwd'])
    .spread((url, username, password) => {
      var startDate = "20170812T00000Z" ;
      var endDate   = "20170812T00000Z" ;
      caldav.getEvents(url, username, password, startDate, endDate, function(){
        sails.log.info('Planning récupéré OK');
      }) ;
    });

};
