angular.module('your_app_name', ['ionic', 'starter.controllers'])

  .run(function ($ionicPlatform, $rootScope , flurryService, $timeout) {
    $ionicPlatform.ready(function () {
     
      $timeout(function () {
        flurryService.init();
      },2000);

    });


    /* **********************        LOGGING PAGE VISIT       ********************************** */

    $rootScope.$on("$stateChangeStart", function (event, next,current) {
      console.log('next page', next);
      if (next && next.name)
        flurryService.logEvent('Page visited', {page:next.name});
    });
    
    /* ***********************************************************************************************/

  });


  });
