angular.module('your_app_name').factory('$exceptionHandler', function (flurryService) {

  return function myExceptionHandler(exception, cause) {
    flurryService.logError(exception, JSON.stringify(cause));

  };
});
