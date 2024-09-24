// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appBASEUrl: '/',
  cookie: {
      name: '_moa',
      expires: 30,
      path: '/',
      domain: '.mustaqeltest.jusour.qa',
      secure: false,
      same_site: 'strict'
  },
  tokenExpiry: '3600', // Token expires in 1 hour (3600 seconds)
  tokenExpiryMin: '900', // Minimum expiry (15 minutes)
  auth_cookie: '_moa',
  apiHostUrl: 'https://dwptest.jusour.qa',
  mediaURL: 'https://dwptest.jusour.qa/storage/' /** put slash at last **/
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
