var getTodayPlanning = require("node-caldav-mod");

module.exports = function(getPlanning){

  return gladys.paramUser.getValues(['gladys-caldav-url', 'gladys-caldav-usr', 'gladys-caldav-pwd'])
      .spread((url, user, pass) => {
          sails.log.info(`Récupération de 3 variables ${url}, ${user}, ${pass}`);
        } ;
};



  // date hardcodée pour test
  // var promises = [
  //    gladys.param.getValue('gladys-caldav-url')
  //    gladys.param.getValue('gladys-caldav-usr').reflect(),
  //    gladys.param.getValue('gladys-caldav-pwd').reflect()
  // ];
  // return Promise.all(promises)
  //   .spread((url, username, password) => {
  //     var startDate = "20170812T00000Z" ;
  //     var endDate   = "20170812T00000Z" ;
  //     caldav.getEvents(url, username, password, startDate, endDate, function(){
  //       sails.log.info('Planning récupéré OK');
  //     }) ;
  //   });

};
