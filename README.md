# ionic1-flurry-marketplugin


`app.js` - The main app file of your Angular 1 app. Just initialize the FlurryAnalytics agent after a timeout of 2 seconds.

`flurry-service.js` - Angular service to handle Flurry related methods - `logEvent`, `logError`, `init`.

`log-custom-error.js` - Use the `$exceptionHandler` to log unhandled error exceptions.  
