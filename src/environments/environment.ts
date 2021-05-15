// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

let clientid = "my_app_id";
let secret = "your_app_secret";
let issuer = "https://myidpportal.com/idp/myapp/";
let logoutUrl = "https://myidpportal.com/idp/myapp/logout.html?ClientID=";

export const environment = {
  production: false,
  idp: {
    issuer: issuer,
    redirectUri: "https://mysite.com",
    clientId: clientid,
    scope: "openid profile email",
    responseType: "code",
    showDebugInformation: true,
    dummyClientSecret: secret,
    logoutUrl: logoutUrl + clientid,
    skipIssuerCheck: true
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
