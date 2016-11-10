angular.module('your_app_name').service('flurryService', function () {

    // create a new instance


    this.init = function () {

      var options = {
        continueSessionSeconds: 3,          // how long can the app be paused before a new session is created, must be less than or equal to five for Android devices
        userId: 'Donald Duck',
        gender: 'm',                        // valid values are "m", "M", "f" and "F"
        age: 27,
        logLevel: 'DEBUG',                  // (VERBOSE, DEBUG, INFO, WARN, ERROR)
        enableLogging: true,                // defaults to false
        enableEventLogging: true,          // should every event show up the app's log, defaults to true
        enableCrashReporting: true,         // should app crashes be recorded in flurry, defaults to false, iOS only
        enableBackgroundSessions: true,     // should the session continue when the app is the background, defaults to false, iOS only
        reportSessionsOnClose: true,       // should data be pushed to flurry when the app closes, defaults to true, iOS only
        reportSessionsOnPause: true        // should data be pushed to flurry when the app is paused, defaults to true, iOS only
      }


      // workaround - create a blank flurryAnalytics for development site since FlurryAnalytics will be available on devices only 
      if (window.cordova) 
        this.flurryAnalytics = new FlurryAnalytics();
      else
        this.flurryAnalytics = {
          logEvent: function () {}
          , init: function () {}
          , logError: function(a,b){console.error(a,b);}
        };


      // initialize it
      this.flurryAnalytics.init('your_app_id', options, function () {

      }, function (err) {

      });


    };

    this.logEvent = function (title, obj) {
      if(this.flurryAnalytics)
      this.flurryAnalytics.logEvent(title, obj, function () {
      }, function () {
      });
    };

    this.logError = function (title, error) {
      if(this.flurryAnalytics)
     this.flurryAnalytics.logError(title, error, function () {

     }, function (err) {

     });
     };


  }
);
