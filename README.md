# ionic1-flurry-marketplugin


Use the cordova plugin https://github.com/blakgeek/cordova-plugin-flurryanalytics to integrate with Flurry.

#### Code files - 

`app.js` - The main app file of your Angular 1 app. Just initialize the FlurryAnalytics agent after a timeout of 2 seconds.
Listen to `$stateChangeStart` event to log your app's internal page visits. Flurry provides Page View functionality but that is suitable for Native applications, since Cordova apps have only one main Activity (Android).
Thats why, use Custom events to handle internal page visits. 

`flurryService.logEvent('Page visited', {page:next.name});` will log the page's name in the custom event "Page visited"

`flurry-service.js` - Angular service to handle Flurry related methods - `logEvent`, `logError`, `init`.

`log-custom-error.js` - Use the `$exceptionHandler` to log unhandled error exceptions.  
