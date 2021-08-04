// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  url: 'https://chat-app.appspot.fragmatica.com',
  grant_type: "password",
	client_id: "2",
	client_secret: "D1EIgp8dXAE4NCOk1fRBKpdvxpbjaP2bAwFeYr54",
  firebase: {
    apiKey: "AIzaSyC6UG-hPvhBuYAl4qdF4yjE8njRaqtChr8",
    authDomain: "chat-app-c3418.firebaseapp.com",
    projectId: "chat-app-c3418",
    storageBucket: "chat-app-c3418.appspot.com",
    messagingSenderId: "876591012165",
    appId: "1:876591012165:web:d4c1cf6853e7b01e5bc62c"
  },
  sw_push: {
    server_public_key: 'BMU_DexceBCUGX1cDogu4hV5IQcUJosS16RZxTKkOkCZTTHG9aHk7gMrma4ZohPizGEO9K7jO-NdduYBkBKR5TA'
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
