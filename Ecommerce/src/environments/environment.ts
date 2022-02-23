// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const apiUrl = 'http://localhost:8000/api';
const lastUpdatedOn = 'Dec 15, 2021 - 02:15:23 PM';
const production = false;
const envName = 'dev';

export const environment = {
  production,
  apiUrl,
  lastUpdatedOn,
  envName,
  firebase: {
    apiKey: "AIzaSyDy2x053SWKe8bWf9mpCHbhMnkcbVnqgN4",
    authDomain: "ecommerce-a499f.firebaseapp.com",
    projectId: "ecommerce-a499f",
    storageBucket: "ecommerce-a499f.appspot.com",
    messagingSenderId: "633670025323",
    appId: "1:633670025323:web:45844cc4936c3da4e2f12e",
    measurementId: "G-XJRZM9CYMT"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
